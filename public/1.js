webpackJsonp([1],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(218)
/* template */
var __vue_template__ = __webpack_require__(219)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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

/***/ 218:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            areas: [],
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
            axios.get('/admin/area/lists', {
                params: params
            }).then(function (res) {
                console.log(res.data.data);
                if (res) {
                    self.areas = res.data.data;
                    self.pagination.total = res.data.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        deleteArea: function deleteArea(id) {
            var self = this;
            this.$confirm('确认删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                axios.post('/admin/area/delete', {
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

/***/ 219:
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
              _c("el-breadcrumb-item", [_vm._v("地域管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("地域列表")])
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
                { attrs: { to: { path: "edit" } } },
                [
                  _c("el-button", [
                    _c("i", { staticClass: "ion-plus" }),
                    _vm._v(" 添加地域")
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
                attrs: { placeholder: "地域名" },
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
        { attrs: { data: _vm.areas, border: "" } },
        [
          _c("el-table-column", { attrs: { prop: "id", label: "ID" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "地域名" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "content", label: "描述" } }),
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
                          to: { path: "edit", query: { id: scope.row.id } }
                        }
                      },
                      [
                        _c(
                          "el-button",
                          { attrs: { size: "small", icon: "edit" } },
                          [_vm._v("编辑")]
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
                            return _vm.deleteArea(scope.row.id)
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