webpackJsonp([3],{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(286)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(288)
/* template */
var __vue_template__ = __webpack_require__(289)
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

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("75294704", content, false, {});
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

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.guideline-title[data-v-5dc9e821] {\n    font-size: 18px;\n    font-weight: 600;\n}\n.guideline-author[data-v-5dc9e821] {\n    float: right;\n    padding: 3px 0\n}\n", ""]);

// exports


/***/ }),

/***/ 288:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            guideline: [],
            comments: []
        };
    },

    methods: {
        onSave: function onSave() {
            var _this = this;

            var self = this;
            axios.post('/front/guideline/detail', self.area).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    self.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    _this.$router.push({
                        path: '/area/list'
                    });
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

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-card", { attrs: { data: _vm.guideline } }, [
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
      ]),
      _vm._v(" "),
      _c("el-card", { attrs: { data: _vm.guideline } }, [
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
                      { attrs: { type: "primary", size: "small" } },
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
        _vm._l(_vm.comments, function(item, index) {
          return _c("div", { key: index }, [
            _c("p", [_vm._v(_vm._s(item.author))])
          ])
        }),
        0
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