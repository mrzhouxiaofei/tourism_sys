webpackJsonp([0],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(215)
}
var normalizeComponent = __webpack_require__(27)
/* script */
var __vue_script__ = __webpack_require__(217)
/* template */
var __vue_template__ = __webpack_require__(218)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/area/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e3bf60e", Component.options)
  } else {
    hotAPI.reload("data-v-7e3bf60e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("66ac275b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e3bf60e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e3bf60e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            wages: [],
            keyword: '',
            pagination: {
                current: 1,
                total: 0,
                pageSize: 20
            }
        };
    },

    methods: {
        search: function search() {
            var self = this;
            var params = {
                page: self.pagination.current,
                pageSize: self.pagination.pageSize,
                keyword: self.keyword
            };
            axios.get('/admin/wage/list', {
                params: params
            }).then(function (res) {
                if (res) {
                    self.wages = res.data.data;
                    self.pagination.total = res.data.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        del: function del(id) {
            var self = this;
            this.$confirm('确认删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                axios.post('/admin/wage/del', {
                    id: id
                }).then(function (res) {
                    if (res.data.code === 0) {
                        self.$message({
                            title: '提示',
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.search();
                    } else {
                        self.$message({
                            title: '提示',
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            }).catch(function () {});
        },
        handleSizeChange: function handleSizeChange(val) {
            this.pagination.pageSize = val;
            this.search();
            console.log('\u6BCF\u9875 ' + val + ' \u6761');
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.pagination.current = val;
            this.search();
            console.log('\u5F53\u524D\u9875: ' + val);
        }
    },
    mounted: function mounted() {
        this.search();
    }
});

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "gm-breadcrumb" },
        [
          _c("i", { staticClass: "ion-ios-home gm-home" }),
          _vm._v(" "),
          _c(
            "el-breadcrumb",
            [
              _c("el-breadcrumb-item", [_vm._v("工资管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("工资列表")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form",
        {
          attrs: { inline: true },
          nativeOn: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.search($event)
            }
          }
        },
        [
          _c(
            "el-form-item",
            [
              _c(
                "router-link",
                { attrs: { to: { path: "import" } } },
                [
                  _c("el-button", [
                    _c("i", { staticClass: "ion-android-upload" }),
                    _vm._v(" 导入工资")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "关键字" } },
            [
              _c("el-input", {
                attrs: { placeholder: "工号 \\ 姓名" },
                model: {
                  value: _vm.keyword,
                  callback: function($$v) {
                    _vm.keyword = $$v
                  },
                  expression: "keyword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary", icon: "search" },
                  on: { click: _vm.search }
                },
                [_vm._v("查询")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        { attrs: { data: _vm.wages, border: "" } },
        [
          _c("el-table-column", { attrs: { prop: "code", label: "工号" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "姓名" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "wage_year", label: "工资年份" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "wage_month", label: "工资月份" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "wage_should", label: "应发工资" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "wage_garnishment", label: "扣发工资" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "wage_actual", label: "实发工资" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { path: "detail", query: { id: scope.row.id } }
                        }
                      },
                      [
                        _c(
                          "el-button",
                          { attrs: { size: "small", icon: "more" } },
                          [_vm._v("详情")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          type: "danger",
                          icon: "delete"
                        },
                        on: {
                          click: function($event) {
                            return _vm.del(scope.row.id)
                          }
                        }
                      },
                      [_vm._v("删除")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        staticStyle: { padding: "1rem 0" },
        attrs: {
          "current-page": _vm.pagination.current,
          "page-sizes": [10, 20, 50, 100],
          "page-size": _vm.pagination.pageSize,
          layout: "total, sizes, prev, pager, next, jumper",
          total: _vm.pagination.total
        },
        on: {
          "size-change": _vm.handleSizeChange,
          "current-change": _vm.handleCurrentChange
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7e3bf60e", module.exports)
  }
}

/***/ })

});