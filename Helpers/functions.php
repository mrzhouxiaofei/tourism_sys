<?php

/**
 * 页面 JSON 统一输出
 * @param int $code 0:成功,1:失败
 * @param string $msg
 * @param null $paras
 * @return \Illuminate\Http\JsonResponse
 */
function responseToJson($code = 0, $msg = '', $paras = null) {
    $res["code"] = $code;
    $res["msg"] = $msg;
    $res["result"] = $paras;

    return response()->json($res);
}

function responseToPage($result) {
    return response()->json($result);
}

/**
 * 获取当前时间
 * @return false|string
 */
function getFormatDate() {
    return date("Y-m-d H:i:s");
}

/**
 * 从 session 中获取用户信息
 * @return \Illuminate\Session\SessionManager|\Illuminate\Session\Store|mixed
 */
function get_session_user() {
    return session('user');
}

/**
 * 获取用户密码的加密字符串
 * @param $password
 * @param $salt
 * @return string
 */
function encrypt_password($password, $salt) {
    return md5(md5($password) . $salt);
}