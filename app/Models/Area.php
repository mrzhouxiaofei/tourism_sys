<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Area extends Model
{
    /**
     * 删除地域
     * @param $id
     * @return mixed
     */
    public static function deleteArea($id) {
        $result = DB::table('areas')
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
     * 添加、编辑地域
     * @param $user
     * @return bool
     */
    public static function editArea($id, $area) {
        if(!empty($id)) {
            //编辑
            $result = DB::table('areas')->where('id', $id)->update($area);
        } else {
            //添加
            $result = DB::table('areas')->insertGetId($area);
        }

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取地域列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getAreaLists($pageSize, $keyword) {
        $result = DB::table('areas')
                    ->where('status', '0')
                    ->where('name', 'like', '%'. $keyword .'%')
                    ->orderBy('created_at', 'desc')
                    ->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }
}
