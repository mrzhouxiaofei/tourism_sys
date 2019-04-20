<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    /**
     * 获取地域列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getList($pageSize, $keyword) {
        $query = self::where('status', '0');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->orWhere('name', 'like', $keyword . '%');
            });
        }
        
        $result = $query->paginate($pageSize);

        return responseToPage($result);
    }
}
