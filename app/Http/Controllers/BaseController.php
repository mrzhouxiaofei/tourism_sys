<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Node;

class BaseController extends Controller
{
    public function index(Request $request) {
        // 依据角色跳转到哪里
        $user = get_session_user();
        if ($user) {
            if ($user->type == User::TYPE_MANAGER) {
                // 管理员
                return view('admin.index');
            } else if ($user->type == User::TYPE_COMMON) {
                // 普通用户
                return view('front.index');
            }
        }

        return view('front.index');
    }

    /**
     * 获得菜单数据
     * @return void
     */
    public function getMenu() {
        $nodes = new Node;
        return responseToPage($nodes->getFormatMenu());
    }
}
