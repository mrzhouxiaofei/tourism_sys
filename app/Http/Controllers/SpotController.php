<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use Illuminate\Http\Request;

class SpotController extends Controller
{
    /**
     * 删除景点
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteSpot(Request $request) {
        $id = $request->get('id', 0);

        $res = Spot::deleteSpot($id);

        if ($res) {
            return responseToJson(0, '删除成功');
        } else {
            return responseToJson(1, '删除失败，请重试');
        }
    }

    /**
     * 添加、编辑景点
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editSpot(Request $request) {
        $id = $request->get('id', 0);
        $spot['area_id'] = $request->get('area_id');
        $spot['area_name'] = $request->get('area_name');
        $spot['name'] = $request->get('name');
        $spot['content'] = $request->get('content');
        $spot['status'] = 0;

        if (empty($spot['area_name'])) {
            return responseToJson(1, '请选择地域名');
        }

        if (empty($spot['name'])) {
            return responseToJson(1, '景点名不能为空');
        }

        if (empty($spot['content'])) {
            return responseToJson(1, '描述不能为空');
        }

        if (!empty($id)) {
            // 编辑
            $spot['updated_at'] = getFormatDate();
        } else {
            // 添加
            $spot['created_at'] = getFormatDate();
        }

        $res = Spot::editSpot($id, $spot);

        if ($res) {
            return responseToJson(0, '保存成功');
        } else {
            return responseToJson(1, '保存失败，请重试');
        }
    }

    /**
     * 获取单个景点
     * @param Request $request
     * @return mixed
     */
    public function getSpot(Request $request) {
        $id = $request->id;

        $res = Spot::find($id);

        if (!empty($res)) {
            return responseToJson(0, 'success', $res);
        } else {
            return responseToJson(1, '景点获取失败');
        }
    }

    /**
     * 获取景点列表
     * @param Request $request
     * @return void
     */
    public function getSpotLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $spots = Spot::getSpotLists($pageSize, $keyword);

        if (!empty($spots)) {
            return $spots;
        } else {
            return responseToJson(1, '景点获取失败');
        }
    }
}
