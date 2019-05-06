webpackJsonp([10],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(253)
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
Component.options.__file = "resources/assets/js/admin/components/area/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53e4f7a5", Component.options)
  } else {
    hotAPI.reload("data-v-53e4f7a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 252:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            area: {
                id: 0,
                name: '',
                content: ''
            }
        };
    },

    methods: {
        onSave: function onSave() {
            var _this = this;

            var self = this;
            axios.post('/admin/area/edit', self.area).then(function (res) {
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
            axios.get('/admin/area/get', {
                params: param
            }).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    self.area = res.data.result;
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

/***/ 253:
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
          _c("i", {
            staticClass: "el-icon-arrow-left gm-home",
            staticStyle: { cursor: "pointer", "margin-top": "-2px" },
            on: {
              click: function($event) {
                return _vm.$router.go(-1)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "el-breadcrumb",
            [
              _c("el-breadcrumb-item", [_vm._v("地域管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("地域编辑")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { staticStyle: { "margin-top": "15px" } },
        [
          _c(
            "el-col",
            { staticStyle: { width: "500px" } },
            [
              _c(
                "el-form",
                { attrs: { model: _vm.area, "label-width": "100px" } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "地域名" } },
                    [
                      _c("el-input", {
                        attrs: { placeholder: "请输入地域名" },
                        model: {
                          value: _vm.area.name,
                          callback: function($$v) {
                            _vm.$set(_vm.area, "name", $$v)
                          },
                          expression: "area.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "描述" } },
                    [
                      _c("el-input", {
                        attrs: { placeholder: "请输入描述" },
                        model: {
                          value: _vm.area.content,
                          callback: function($$v) {
                            _vm.$set(_vm.area, "content", $$v)
                          },
                          expression: "area.content"
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
                          attrs: { type: "primary" },
                          on: { click: _vm.onSave }
                        },
                        [_vm._v("保 存")]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        { attrs: { to: "/area/list" } },
                        [_c("el-button", [_vm._v("取 消")])],
                        1
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
        ],
        1
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-53e4f7a5", module.exports)
  }
}

/***/ })

});