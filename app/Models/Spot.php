<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Spot extends Model
{

    /**
     * 删除景点
     * @param $id
     * @return mixed
     */
    public static function deleteSpot($id) {
        $result = DB::table('spots')
            ->where('id', $id)
            ->update([
                'status' => '1',
                'updated_at' => getFormatDate()
            ]);

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 添加、编辑景点
     * @param $user
     * @return bool
     */
    public static function editSpot($id, $spot) {
        if(!empty($id)) {
            //编辑
            $result = DB::table('spots')->where('id', $id)->update($spot);
        } else {
            //添加
            $result = DB::table('spots')->insertGetId($spot);
        }

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取景点列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getSpotLists($pageSize, $keyword) {
        $query = DB::table('spots')->where('status', '0');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->orWhere('area_name', 'like', $keyword . '%')
                    ->orWhere('name', 'like', $keyword . '%');
            });
        }
        $result = $query->orderBy('created_at', 'desc')->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }

    /**
     * 获取最新地域、热门攻略
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getHotLists() {
        $comments = DB::table('comments')
            ->where('status', '0')
            ->select('guideline_id', DB::raw('count(*) as total'))
            ->groupBy('guideline_id')
            ->orderBy('total', 'desc')
            ->limit(10)
            ->get()
            ->toArray();

        $ids = array_column($comments,'guideline_id');

        $guidelines = DB::table('guidelines')
            ->where('status', '0')
            ->whereIn('id', $ids)
            ->get()
            ->toArray();

        $formatGuidelines = [];

        foreach ($ids as $id) {
            foreach ($guidelines as $guideline) {
                if ($id == $guideline->id) {
                    array_push($formatGuidelines, $guideline);
                }
            }
        }

        $spots = DB::table('spots')
            ->where('status', '0')
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get()
            ->ToArray();

        $guidelineSpots = array(
            'guidelines' => $formatGuidelines,
            'spots' => $spots
        );

        if (!empty($guidelineSpots)) {
            return responseToPage($guidelineSpots);
        } else {
            return false;
        }
    }
}
