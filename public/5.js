webpackJsonp([5],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
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
Component.options.__file = "resources/assets/js/components/comment/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64349105", Component.options)
  } else {
    hotAPI.reload("data-v-64349105", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 249:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            comments: [],
            keyword: '',
            pagination: {
                current: 1,
                total: 0,
                pageSize: 20
            }
        };
    },

    methods: {
        formatter: function formatter(row, column) {
            if (row.content.length > 10) {
                return row.content.substring(0, 10) + '~~~';
            } else {
                return row.content;
            }
        },
        jumpLink: function jumpLink(url) {
            window.open(url);
        },
        search: function search() {
            var self = this;
            var params = {
                page: self.pagination.current,
                pageSize: self.pagination.pageSize,
                keyword: self.keyword
            };
            axios.get('/admin/comment/lists', {
                params: params
            }).then(function (res) {
                if (res) {
                    self.comments = res.data.data;
                    self.pagination.total = res.data.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        deleteComment: function deleteComment(id) {
            var self = this;
            this.$confirm('确认删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                axios.post('/admin/comment/delete', {
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

/***/ 250:
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
              _c("el-breadcrumb-item", [_vm._v("评论管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("评论列表")])
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
                attrs: { placeholder: "攻略标题 / 评论人" },
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
        { attrs: { data: _vm.comments, border: "" } },
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
                            _c(
                              "el-form-item",
                              { attrs: { label: "攻略标题" } },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(props.row.guideline_title))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "攻略地址" } },
                              [
                                _c(
                                  "span",
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: { type: "text" },
                                        on: {
                                          click: function($event) {
                                            return _vm.jumpLink(
                                              props.row.guideline_url
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(props.row.guideline_url))]
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "评论人" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.author))])
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "评论时间" } },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(props.row.created_at))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "评论内容" } },
                              [_c("span", [_vm._v(_vm._s(props.row.content))])]
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
            attrs: { prop: "guideline_title", label: "攻略标题" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "author", label: "评论人" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "content",
              label: "评论内容",
              formatter: _vm.formatter
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "评论时间" }
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
                          type: "danger",
                          icon: "el-icon-delete"
                        },
                        on: {
                          click: function($event) {
                            return _vm.deleteComment(scope.row.id)
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-64349105", module.exports)
  }
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("2c9d3d43", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64349105\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64349105\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ })

});