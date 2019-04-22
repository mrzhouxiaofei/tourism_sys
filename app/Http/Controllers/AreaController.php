<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Area;

class AreaController extends Controller
{
    /**
     * 删除地域
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteArea(Request $request) {
        $id = $request->get('id', 0);

        $res = Area::deleteArea($id);

        if ($res) {
            return responseToJson(0, '删除成功');
        } else {
            return responseToJson(1, '删除失败，请重试');
        }
    }

    /**
     * 添加、编辑地域
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editArea(Request $request) {
        $id = $request->get('id', 0);
        $area['name'] = $request->get('name');
        $area['content'] = $request->get('content');
        $area['status'] = 0;

        if (empty($area['name'])) {
            return responseToJson(1, '地域名不能为空');
        }

        if (empty($area['content'])) {
            return responseToJson(1, '描述不能为空');
        }

        if (!empty($id)) {
            // 编辑
            $area['updated_at'] = getFormatDate();
        } else {
            // 添加
            $area['created_at'] = getFormatDate();
        }

        $res = Area::editArea($id, $area);

        if ($res) {
            return responseToJson(0, '保存成功');
        } else {
            return responseToJson(1, '保存失败，请重试');
        }
    }

    /**
     * 获取单个地域
     * @param Request $request
     * @return mixed
     */
    public function getArea(Request $request) {
        $id = $request->id;

        $res = Area::find($id);

        if (!empty($res)) {
            return responseToJson(0, 'success', $res);
        } else {
            return responseToJson(1, '地域获取失败');
        }
    }

    /**
     * 获取地域列表
     * @param Request $request
     * @return void
     */
    public function getAreaLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $areas = Area::getLists($pageSize, $keyword);

        if (!empty($areas)) {
            return $areas;
        } else {
            return responseToJson(1, '地域获取失败');
        }
    }
}
