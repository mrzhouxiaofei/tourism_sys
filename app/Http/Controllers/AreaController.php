<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Area;

class AreaController extends Controller
{
    /**
     * 获取地域列表
     * @param Request $request
     * @return void
     */
    public function getAreaList(Request $request)
    {
        $pageSize = $request->pageSize;
        $keyword = $request->keyword;

        $areas = Area::getList($pageSize, $keyword);

        if (!empty($areas)) {
            return $areas;
        } else {
            return responseToJson(1, '地域获取失败');
        }
    }
}
