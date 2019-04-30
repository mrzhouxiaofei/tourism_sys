<?php

namespace App\Http\Controllers;

use App\Models\Guideline;
use Illuminate\Http\Request;

class GuidelineController extends Controller
{
    /**
     * 删除攻略
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteGuideline(Request $request) {
        $id = $request->get('id', 0);

        $res = Guideline::deleteGuideline($id);

        if ($res) {
            return responseToJson(0, '删除成功');
        } else {
            return responseToJson(1, '删除失败，请重试');
        }
    }

    /**
     * 获取单个攻略详情和评论
     * @param Request $request
     * @return mixed
     */
    public function getGuidelineDetail(Request $request) {
        $id = $request->id;

        $res = Guideline::getGuidelineDetail($id);

        if (!empty($res)) {
            return responseToJson(0, 'success', $res);
        } else {
            return responseToJson(1, '攻略获取失败');
        }
    }

    /**
     * 获取攻略列表
     * @param Request $request
     * @return void
     */
    public function getGuidelineLists(Request $request) {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $guidelines = Guideline::getGuidelineLists($pageSize, $keyword);

        if (!empty($guidelines)) {
            return $guidelines;
        } else {
            return responseToJson(1, '攻略获取失败');
        }
    }
}
