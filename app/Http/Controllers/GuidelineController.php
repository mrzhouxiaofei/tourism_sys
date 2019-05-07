<?php

namespace App\Http\Controllers;

use App\Models\Comment;
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

    /**
     * 提交攻略评论
     * @param Request $request
     * @return void
     */
    public function postGuidelineComment(Request $request) {
        $comment['guideline_id'] = $request->get('guideline_id');
        $comment['guideline_title'] = $request->get('guideline_title');
        $comment['guideline_url'] = $request->get('guideline_url');
        $comment['content'] = $request->get('content');
        $comment['status'] = 0;
        $comment['created_at'] = getFormatDate();

        if (empty($comment['content'])) {
            return responseToJson(1, '评论内容不能为空');
        }

        if (!empty(get_session_user())) {
            $comment['author'] = get_session_user()->nickname;
        } else {
            return responseToJson(1, '请登录后再评论');
        }

        $res = Comment::postGuidelineComment($comment);

        if ($res) {
            return responseToJson(0, '保存成功');
        } else {
            return responseToJson(1, '保存失败，请重试');
        }
    }

    /**
     * 发布攻略
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editGuideline(Request $request) {
        $guideline['title'] = $request->get('title');
        $guideline['content'] = $request->get('content');
        $guideline['status'] = 0;
        $guideline['created_at'] = getFormatDate();

        if (empty($guideline['title'])) {
            return responseToJson(1, '标题不能为空');
        }

        if (empty($guideline['content'])) {
            return responseToJson(1, '正文不能为空');
        }

        if (!empty(get_session_user())) {
            $guideline['author'] = get_session_user()->nickname;
        } else {
            return responseToJson(1, '请登录后再发布');
        }

        $res = Guideline::editGuideline($guideline);

        if ($res) {
            return responseToJson(0, '保存成功');
        } else {
            return responseToJson(1, '保存失败，请重试');
        }
    }
}
