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
        $result = DB::table('spots')
                    ->where('status', '0')
                    ->where('area_name', 'like', '%'. $keyword .'%')
                    ->orWhere('name', 'like', '%'. $keyword .'%')
                    ->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }
}
