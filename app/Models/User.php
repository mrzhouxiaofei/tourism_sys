<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class User extends Model
{
    const TYPE_COMMON = 0;  // 普通用户
    const TYPE_MANAGER = 1;  // 管理员

    /**
     * 获取用户信息
     * @param $loginName 用户名
     * @return mixed
     */
    public static function getUser($loginName)
    {
        $user = DB::table('users')->where('username', $loginName)->first();

        if (!empty($user)) {
            return $user;
        } else {
            return false;
        }
    }
}
