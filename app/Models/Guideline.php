<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Guideline extends Model
{
    /**
     * 删除攻略
     * @param $id
     * @return mixed
     */
    public static function deleteGuideline($id) {
        $result = DB::table('guidelines')
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
     * 获取攻略列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getGuidelineLists($pageSize, $keyword) {
        $query = DB::table('guidelines')->where('status', '0');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->orWhere('title', 'like', $keyword . '%')
                    ->orWhere('author', 'like', $keyword . '%');
            });
        }
        $result = $query->orderBy('created_at', 'desc')->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }
}
