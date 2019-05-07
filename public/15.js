webpackJsonp([15],{

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(298)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d4ac02c2"
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
Component.options.__file = "resources/assets/js/front/components/area/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4ac02c2", Component.options)
  } else {
    hotAPI.reload("data-v-d4ac02c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("d95d18ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d4ac02c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/.0.28.11@css-loader/index.js!../../../../../../node_modules/.13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d4ac02c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/.13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.card-container[data-v-d4ac02c2] {\n    overflow: hidden;\n}\n.area-title[data-v-d4ac02c2] {\n    font-size: 18px;\n    font-weight: 600;\n}\n.spot-content>h3[data-v-d4ac02c2] {\n    text-align: center;\n    margin-bottom: 50px;\n}\n.card-panel[data-v-d4ac02c2] {\n    margin-top: 20px;\n    background-color: pink;\n    float: left;\n}\n.card-panel-left[data-v-d4ac02c2] {\n    width: 30%;\n}\n.card-panel-right[data-v-d4ac02c2] {\n    width: 65%;\n    margin-left: 4%;\n}\n", ""]);

// exports


/***/ }),

/***/ 300:
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
            areas: [],
            areaSpot: [],
            spot: {
                name: '',
                content: '',
                created_at: ''
            }
        };
    },

    methods: {
        handleChange: function handleChange(value) {
            var self = this;
            if (value.length === 1) {
                self.spot.name = '';
                self.spot.content = '当前旅游地域暂无景点';
                self.spot.created_at = '';
                return;
            }

            var param = {
                id: value.pop()
            };
            axios.get('/front/spot/get', {
                params: param
            }).then(function (res) {
                if (res.data.code === 0) {
                    self.spot.name = res.data.result.name;
                    self.spot.content = res.data.result.content;
                    self.spot.created_at = res.data.result.created_at;
                } else {
                    self.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            });
        },
        formatAreaSpot: function formatAreaSpot(areaSpots) {
            var result = [];

            areaSpots['areas'].forEach(function (value) {
                var spots = [];
                areaSpots['spots'].forEach(function (val) {
                    if (value['id'] === val['area_id']) {
                        spots.push({
                            'value': val['id'],
                            'label': val['name']
                        });
                    }
                }, spots);

                if (spots.length > 0) {
                    result.push({
                        'value': value['id'],
                        'label': value['name'],
                        'children': spots
                    });
                } else {
                    result.push({
                        'value': value['id'],
                        'label': value['name']
                    });
                }
            }, result);

            return result;
        },
        getData: function getData() {
            var self = this;
            axios.get('/front/area/lists').then(function (res) {
                if (res) {
                    self.areas = self.formatAreaSpot(res.data);
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

/***/ 301:
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
          _c("span", { staticClass: "area-title" }, [_vm._v("请选择旅游地域")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("el-cascader", {
              attrs: { options: _vm.areas, filterable: "" },
              on: { change: _vm.handleChange },
              model: {
                value: _vm.areaSpot,
                callback: function($$v) {
                  _vm.areaSpot = $$v
                },
                expression: "areaSpot"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-card",
        {
          staticClass: "card-panel card-panel-right",
          attrs: { data: _vm.spot }
        },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", { staticClass: "area-title" }, [_vm._v("景点介绍")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "spot-content" }, [
            _c("h3", [_vm._v(_vm._s(_vm.spot.name))]),
            _vm._v(" "),
            _c("p", { domProps: { innerHTML: _vm._s(_vm.spot.content) } })
          ])
        ]
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d4ac02c2", module.exports)
  }
}

/***/ })

});