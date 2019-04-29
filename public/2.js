webpackJsonp([2],{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
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
Component.options.__file = "resources/assets/js/components/user/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b89ea10a", Component.options)
  } else {
    hotAPI.reload("data-v-b89ea10a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("e455e284", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b89ea10a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b89ea10a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 257:
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
            users: [],
            keyword: '',
            pagination: {
                current: 1,
                total: 0,
                pageSize: 20
            }
        };
    },

    methods: {
        filterTag: function filterTag(value, row, column) {
            var property = column['property'];
            return row[property] === value;
        },
        search: function search() {
            var self = this;
            var params = {
                page: self.pagination.current,
                pageSize: self.pagination.pageSize,
                keyword: self.keyword
            };
            axios.get('/admin/user/lists', {
                params: params
            }).then(function (res) {
                if (res) {
                    self.users = res.data.data;
                    self.pagination.total = res.data.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        editStatus: function editStatus(row) {
            var self = this;
            var id = row.id;
            var status = row.status === '1' ? '0' : '1';
            this.$confirm('确认执行吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                axios.post('/admin/user/editStatus', {
                    id: id,
                    status: status
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

/***/ 258:
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
              _c("el-breadcrumb-item", [_vm._v("用户管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("用户列表")])
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
            { attrs: { label: "关键字" } },
            [
              _c("el-input", {
                attrs: { placeholder: "用户名 / 昵称" },
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
        { attrs: { data: _vm.users, border: "" } },
        [
          _c("el-table-column", {
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "el-form",
                      {
                        staticClass: "demo-table-expand",
                        attrs: { "label-position": "left" }
                      },
                      [
                        _c(
                          "el-card",
                          [
                            _c("el-form-item", { attrs: { label: "用户名" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.username))])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "昵称" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.nickname))])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "性别" } }, [
                              props.row.sex === 0
                                ? _c("span", [_vm._v("女")])
                                : props.row.sex === 0
                                ? _c("span", [_vm._v("男")])
                                : _c("span", [_vm._v("保密")])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "手机号" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.phone))])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "城市" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.city))])
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "注册时间" } },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(props.row.created_at))
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { type: "index", label: "#" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "username", label: "用户名" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "nickname", label: "昵称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "status",
              label: "状态",
              filters: [
                { text: "正常", value: "0" },
                { text: "禁用", value: "1" }
              ],
              "filter-method": _vm.filterTag
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-tag",
                      {
                        attrs: {
                          type: scope.row.status === "0" ? "success" : "danger"
                        }
                      },
                      [
                        scope.row.status === "0"
                          ? _c("span", [_vm._v("正常")])
                          : _c("span", [_vm._v("禁用")])
                      ]
                    )
                  ]
                }
              }
            ])
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
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          type: scope.row.status === "0" ? "danger" : "success",
                          icon: "el-icon-edit"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editStatus(scope.row)
                          }
                        }
                      },
                      [
                        scope.row.status === "0"
                          ? _c("span", [_vm._v("禁用")])
                          : _c("span", [_vm._v("启用")])
                      ]
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b89ea10a", module.exports)
  }
}

/***/ })

});