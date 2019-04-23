webpackJsonp([6],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(225)
/* template */
var __vue_template__ = __webpack_require__(226)
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
Component.options.__file = "resources/assets/js/components/spot/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-785fb790", Component.options)
  } else {
    hotAPI.reload("data-v-785fb790", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_AreaSelect_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_AreaSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__widget_AreaSelect_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        AreaSelect: __WEBPACK_IMPORTED_MODULE_0__widget_AreaSelect_vue___default.a
    },
    data: function data() {
        return {
            area: { // 地域
                area_id: 0,
                area_name: ''
            },
            spot: { // 景点
                id: 0,
                name: '',
                content: ''
            }
        };
    },

    methods: {
        AreaChange: function AreaChange(now) {
            if (now) {
                this.area.area_id = now.id;
                this.area.area_name = now.name;
            } else {
                this.area.area_id = 0;
                this.area.area_name = '';
            }
        },
        onSave: function onSave() {
            var _this = this;

            var self = this;
            var params = {
                id: self.spot.id,
                area_id: self.area.area_id,
                area_name: self.area.area_name,
                name: self.spot.name,
                content: self.spot.content
            };
            axios.post('/admin/spot/edit', params).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    self.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    _this.$router.push({
                        path: '/spot/list'
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
            axios.get('/admin/spot/get', {
                params: param
            }).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    console.log(res.data.result);
                    self.spot.id = res.data.result.id;
                    self.area.area_id = res.data.result.area_id;
                    self.area.area_name = res.data.result.area_name;
                    self.spot.name = res.data.result.name;
                    self.spot.content = res.data.result.content;
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

/***/ 226:
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
              _c("el-breadcrumb-item", [_vm._v("景点管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("景点编辑")])
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
                { attrs: { model: _vm.spot, "label-width": "100px" } },
                [
                  _c(
                    "el-form-item",
                    {
                      staticStyle: { height: "50px" },
                      attrs: { label: "地域名" }
                    },
                    [
                      _c("area-select", {
                        attrs: { id: _vm.area.area_id },
                        on: { change: _vm.AreaChange }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "景点名" } },
                    [
                      _c("el-input", {
                        attrs: { placeholder: "请输入景点名" },
                        model: {
                          value: _vm.spot.name,
                          callback: function($$v) {
                            _vm.$set(_vm.spot, "name", $$v)
                          },
                          expression: "spot.name"
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
                          value: _vm.spot.content,
                          callback: function($$v) {
                            _vm.$set(_vm.spot, "content", $$v)
                          },
                          expression: "spot.content"
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
                        { attrs: { to: "/spot/list" } },
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-785fb790", module.exports)
  }
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(228)
/* template */
var __vue_template__ = __webpack_require__(229)
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
Component.options.__file = "resources/assets/js/components/widget/AreaSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11d9b9ad", Component.options)
  } else {
    hotAPI.reload("data-v-11d9b9ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            id_copy: null,
            lists: [],
            loading: false
        };
    },
    props: {
        id: {
            type: Number
        }
    },
    watch: {
        id: function id(now) {
            if (this.id) {
                this.id_copy = this.id;
            }
        }
    },
    methods: {
        get_lists: function get_lists() {
            var self = this;
            this.loading = true;
            axios.get("/admin/area/select").then(function (response) {
                self.loading = false;
                self.lists = response.data.areas;
            });
        },
        value_change: function value_change() {
            var value = this.id_copy;

            if (!value) {
                this.$emit("change", null);
                return;
            }
            var lists = this.lists;
            for (var i = 0; i < lists.length; i++) {
                if (lists[i].id === value) {
                    this.$emit("change", lists[i]);
                    break;
                }
            }
        }
    },
    mounted: function mounted() {
        this.get_lists();
        if (this.id) {
            this.id_copy = this.id;
        }
    }
});

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-select",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      attrs: { clearable: "", placeholder: "请选择地域名" },
      on: { change: _vm.value_change },
      model: {
        value: _vm.id_copy,
        callback: function($$v) {
          _vm.id_copy = $$v
        },
        expression: "id_copy"
      }
    },
    _vm._l(_vm.lists, function(item, index) {
      return _c("el-option", {
        key: index,
        attrs: { label: item.name, value: item.id }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-11d9b9ad", module.exports)
  }
}

/***/ })

});