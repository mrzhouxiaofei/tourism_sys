<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 登陆
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View
     */
    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            $name = $request->name;
            $pwd = $request->pwd;
            $user = User::getUser($name);

            if ($user && $user->status == 0) {
                if (encrypt_password($pwd, $user->salt) == $user->password) {
                    session(['user' => $user]);
                    return responseToJson(0,'登录成功');
                } else {
                    return responseToJson(1,'用户名或密码错误，请重新输入');
                }
            } else {
                return responseToJson(1,'用户名或密码错误，请重新输入');
            }
        } else {
            return view('login');
        }
    }

    /**
     * 注销
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout(Request $request) {
        $request->session()->flush();
        return redirect('/');
    }

    /**
     * 修改用户状态
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editUserStatus(Request $request) {
        $id = $request->get('id', 0);
        $status = $request->get('status');

        $res = User::editUserStatus($id, $status);

        if ($res) {
            return responseToJson(0, '修改成功');
        } else {
            return responseToJson(1, '修改失败，请重试');
        }
    }

    /**
     * 获取用户列表
     * @param Request $request
     * @return void
     */
    public function getUserLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $users = User::getUserLists($pageSize, $keyword);

        if (!empty($users)) {
            return $users;
        } else {
            return responseToJson(1, '用户获取失败');
        }
    }
}
