webpackJsonp([5],{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(289)
/* template */
var __vue_template__ = __webpack_require__(290)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b425f7f"
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
Component.options.__file = "resources/assets/js/front/components/index/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b425f7f", Component.options)
  } else {
    hotAPI.reload("data-v-6b425f7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("4b7d6cae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b425f7f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue", function() {
     var newContent = require("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b425f7f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.card-container[data-v-6b425f7f] {\n    overflow: hidden;\n}\n.area-title[data-v-6b425f7f] {\n    font-size: 18px;\n    font-weight: 600;\n}\n.card-panel[data-v-6b425f7f] {\n    margin-top: 20px;\n    float: left;\n}\n.card-panel-left[data-v-6b425f7f] {\n    width: 48%;\n}\n.card-panel-right[data-v-6b425f7f] {\n    width: 48%;\n    margin-left: 2%;\n}\n", ""]);

// exports


/***/ }),

/***/ 289:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            guidelines: [],
            spots: []
        };
    },

    methods: {
        spotChange: function spotChange(row) {
            var id = row.id;
            this.$router.push({
                path: '/area',
                query: {
                    id: id
                }
            });
        },
        guidelineChange: function guidelineChange(row) {
            var id = row.id;
            this.$router.push({
                path: '/guideline/detail',
                query: {
                    id: id
                }
            });
        },
        getData: function getData() {
            var self = this;
            axios.get('/front/index/lists').then(function (res) {
                if (res) {
                    self.guidelines = res.data.guidelines;
                    self.spots = res.data.spots;
                } else {
                    console.log(res.data.msg);
                }
            });
        }
    },
    mounted: function mounted() {
        this.getData();
    }
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-container" },
    [
      _c("el-card", { staticClass: "card-panel card-panel-left" }, [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("span", { staticClass: "area-title" }, [_vm._v("热门景点")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "el-table",
              {
                attrs: { data: _vm.spots },
                on: { "row-click": _vm.spotChange }
              },
              [
                _c("el-table-column", { attrs: { type: "index", label: "#" } }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "景点" }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("el-card", { staticClass: "card-panel card-panel-right" }, [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("span", { staticClass: "area-title" }, [_vm._v("最新攻略")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "el-table",
              {
                attrs: { data: _vm.guidelines },
                on: { "row-click": _vm.guidelineChange }
              },
              [
                _c("el-table-column", { attrs: { type: "index", label: "#" } }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "title", label: "攻略" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "created_at", label: "发布时间" }
                })
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-6b425f7f", module.exports)
  }
}

/***/ })

});