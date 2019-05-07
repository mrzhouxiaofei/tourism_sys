webpackJsonp([4],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(279)
/* template */
var __vue_template__ = __webpack_require__(280)
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
Component.options.__file = "resources/assets/js/admin/components/message/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cea16dc6", Component.options)
  } else {
    hotAPI.reload("data-v-cea16dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("4654779c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cea16dc6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cea16dc6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 279:
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
            messages: [],
            answerMessageId: 0,
            answerMessageFlag: false,
            comment: '',
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
            if (row.content.length > 15) {
                return row.content.substring(0, 15) + '~~~';
            } else {
                return row.content;
            }
        },
        confirmAnswerMessage: function confirmAnswerMessage() {
            var _this = this;

            var self = this;
            axios.post('/admin/message/answer', {
                id: self.answerMessageId,
                content: self.comment
            }).then(function (res) {
                if (res.data.code === 0) {
                    self.$message({
                        title: '提示',
                        message: res.data.msg,
                        type: 'success'
                    });
                    self.answerMessageId = 0;
                    _this.answerMessageFlag = false;
                    self.search();
                } else {
                    self.$message({
                        title: '提示',
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            });
        },
        openAnswerMessage: function openAnswerMessage(id) {
            this.answerMessageId = id;
            this.answerMessageFlag = true;
        },
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
            axios.get('/admin/message/lists', {
                params: params
            }).then(function (res) {
                if (res) {
                    self.messages = res.data.data;
                    console.log(self.messages);
                    self.pagination.total = res.data.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        deleteMessage: function deleteMessage(id) {
            var self = this;
            this.$confirm('确认删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                axios.post('/admin/message/delete', {
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

/***/ 280:
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
              _c("el-breadcrumb-item", [_vm._v("留言管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("留言列表")])
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
                attrs: { placeholder: "留言人" },
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
        { attrs: { data: _vm.messages, border: "" } },
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
                            _c("el-form-item", { attrs: { label: "留言人" } }, [
                              _c("span", [_vm._v(_vm._s(props.row.author))])
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "留言时间" } },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(props.row.created_at))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "留言内容" } },
                              [_c("span", [_vm._v(_vm._s(props.row.content))])]
                            ),
                            _vm._v(" "),
                            props.row.type === "0"
                              ? _c(
                                  "el-form-item",
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          size: "small",
                                          type: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openAnswerMessage(
                                              props.row.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("回 复")]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        props.row.type === "1"
                          ? _c(
                              "el-card",
                              { staticStyle: { "margin-top": "10px" } },
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "回复人" } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(props.row.comment.author))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "回复时间" } },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(props.row.comment.created_at)
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "回复内容" } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(props.row.comment.content))
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
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
          _c("el-table-column", { attrs: { prop: "author", label: "留言人" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "content",
              label: "留言内容",
              formatter: _vm.formatter
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "留言时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "type",
              label: "状态",
              filters: [
                { text: "未回复", value: "0" },
                { text: "已回复", value: "1" }
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
                          type: scope.row.type === "0" ? "danger" : "info"
                        }
                      },
                      [
                        scope.row.type === "0"
                          ? _c("span", [_vm._v("未回复")])
                          : _c("span", [_vm._v("已回复")])
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
                          type: "danger",
                          icon: "el-icon-delete"
                        },
                        on: {
                          click: function($event) {
                            return _vm.deleteMessage(scope.row.id)
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
      _c(
        "el-dialog",
        {
          attrs: {
            title: "回复内容",
            visible: _vm.answerMessageFlag,
            width: "30%"
          },
          on: {
            "update:visible": function($event) {
              _vm.answerMessageFlag = $event
            }
          }
        },
        [
          _c(
            "el-form",
            [
              _c(
                "el-form-item",
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: 4 },
                    model: {
                      value: _vm.comment,
                      callback: function($$v) {
                        _vm.comment = $$v
                      },
                      expression: "comment"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  attrs: { size: "small", type: "primary" },
                  on: { click: _vm.confirmAnswerMessage }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-cea16dc6", module.exports)
  }
}

/***/ })

});