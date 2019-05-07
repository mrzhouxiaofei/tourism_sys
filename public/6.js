webpackJsonp([6],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(297)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(299)
/* template */
var __vue_template__ = __webpack_require__(300)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dc9e821"
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
Component.options.__file = "resources/assets/js/front/components/guideline/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dc9e821", Component.options)
  } else {
    hotAPI.reload("data-v-5dc9e821", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("75294704", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dc9e821\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue", function() {
     var newContent = require("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dc9e821\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.guideline-title[data-v-5dc9e821] {\n    font-size: 18px;\n    font-weight: 600;\n}\n.guideline-author[data-v-5dc9e821] {\n    float: right;\n    padding: 3px 0\n}\n.comment-title[data-v-5dc9e821] {\n    font-size: 18px;\n    font-weight: 600;\n}\n.comment-content[data-v-5dc9e821] {\n    margin: 20px auto;\n    padding: 1px 15px;\n    border-radius: 4px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n}\n.card-panel[data-v-5dc9e821] {\n    margin-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 299:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            guideline: [],
            comments: [], // 评论列表
            comment: ''
        };
    },

    methods: {
        postGuidelineComment: function postGuidelineComment() {
            var self = this;
            axios.post('/front/guideline/comment', {
                guideline_id: self.guideline.id,
                guideline_title: self.guideline.title,
                guideline_url: window.location.href,
                content: self.comment
            }).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    self.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    self.getData(self.guideline.id);
                } else {
                    self.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            });
        },
        getData: function getData(id) {
            var self = this;
            var param = {
                id: id
            };
            axios.get('/front/guideline/get', {
                params: param
            }).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    self.guideline = res.data.result[0];
                    self.comments = res.data.result[0]['comments'];
                    console.log(self.guideline);
                    console.log(self.comments);
                } else {
                    self.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            });
        }
    },
    mounted: function mounted() {
        var id = Number.parseInt(this.$route.query.id);
        if (id > 0) {
            // 加载对象
            this.getData(id);
        }
    }
});

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-card",
        { staticClass: "card-panel", attrs: { data: _vm.guideline } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", { staticClass: "guideline-title" }, [
              _vm._v(_vm._s(_vm.guideline.title))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "guideline-author" }, [
              _vm._v(
                _vm._s(_vm.guideline.created_at) +
                  " " +
                  _vm._s(_vm.guideline.author)
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { domProps: { innerHTML: _vm._s(_vm.guideline.content) } })
        ]
      ),
      _vm._v(" "),
      _c("el-card", { staticClass: "card-panel" }, [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("span", { staticClass: "guideline-title" }, [_vm._v("评论")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "el-form",
              { attrs: { "label-width": "80px" } },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "评论内容" } },
                  [
                    _c("el-input", {
                      attrs: {
                        type: "textarea",
                        rows: 4,
                        placeholder: "限 2000 字内"
                      },
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
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small" },
                        on: { click: _vm.postGuidelineComment }
                      },
                      [_vm._v("提交")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-card",
        { staticClass: "card-panel" },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", { staticClass: "comment-title" }, [_vm._v("用户评论")])
          ]),
          _vm._v(" "),
          _vm._l(_vm.comments, function(item, index) {
            return _c("div", { key: index, staticClass: "comment-content" }, [
              _c("p", [_vm._v(_vm._s(item.author) + " says:")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(item.content))]),
              _vm._v(" "),
              _c("p", [
                _c("i", { staticClass: "el-icon-date" }),
                _vm._v(" " + _vm._s(item.created_at))
              ])
            ])
          })
        ],
        2
      )
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5dc9e821", module.exports)
  }
}

/***/ })

});