webpackJsonp([1],{

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(498)

var Component = __webpack_require__(508)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(509),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'app',
  methods: {
    handleProcess: function () {
      console.log("in handle process");
      this.loading = true;
      this.tableData = [];
      this.tableData2 = [];
      // check if api call succesful
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* nlp */])(this.text).then(res => {
        console.log(res);
        for (let k = 0; k < Object.keys(res.entities).length; k++) {
          this.tableData2.push({
            word: Object.keys(res.entities)[k],
            obj: res.entities[Object.keys(res.entities)[k]]
          });
        }
        let data, word;
        for (let i = 0; i < Object.keys(res.pos).length; i++) {
          word = Object.keys(res.pos)[i];
          data = {
            word: word,
            tag: res.pos[word],
            obj: ''
          };
          if (Object.keys(res.entities).indexOf(word) > -1) {
            data.obj = res.entities.word;
          } else {
            for (let j = 0; j < Object.keys(res.entities).length; j++) {
              if (i != Object.keys(res.pos).length - 1 && Object.keys(res.entities)[j].indexOf(word) > -1 && Object.keys(res.entities)[j].indexOf(Object.keys(res.pos)[i + 1]) > -1) {
                data.obj = res.entities[Object.keys(res.entities)[j]];
              }
            }
          }
          this.tableData.push(data);
        }

        this.nlpVisible = true;
        // generate notifications
        this.$notify({
          title: 'Success',
          message: 'Succesfully Funded!',
          type: 'success'
        });
        this.loading = false;
      });
    }
  },
  data() {
    return {
      loading: false,
      nlpVisible: false,
      tableData: [],
      tableData2: [],
      text: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. “The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”'

    };
  }
});

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_App_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_theme_theme_darkblue_index_css__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_theme_theme_darkblue_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_theme_theme_darkblue_index_css__);





const eventsHub = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]();
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  el: '#app',
  template: '<App/>',
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__views_App_vue___default.a)
}).$mount('#app');

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nlp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/**
 * Returns the balance of an address using BlockCypher's test faucet
 * @param  {string} address [Address of the query]
 * @return {JSON}         [JSON containing the unconfirmed_balance and final_balance]
 */
async function nlp(sentence) {
	try {
		let data = { 's': sentence };
		console.log("in nlp");
		let result = await __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`https://taggingnlp.herokuapp.com/nlp`, data);
		console.log(result);
		return result.data;
	} catch (error) {
		console.log('error', error); // catch errors
		return {
			errors: error
		};
	}
}



/***/ }),

/***/ 498:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/artificial-intelligence.16d5147.png";

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(507),
      "width": "100px",
      "height": "100px"
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "mt-3"
  }, [_vm._v("NLP Tagger")]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('section', [
    [_c('div', {
      staticClass: "main"
    }, [_c('el-input', {
      staticStyle: {
        "width": "80%"
      },
      attrs: {
        "type": "textarea",
        "autosize": {
          minRows: 5
        },
        "placeholder": "Please input a sentence to test!"
      },
      model: {
        value: (_vm.text),
        callback: function($$v) {
          _vm.text = $$v
        },
        expression: "text"
      }
    })], 1), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.handleProcess
      }
    }, [_vm._v("Analyse")])]
  ], 2), _vm._v(" "), _c('section', [_c('el-dialog', {
    attrs: {
      "title": "Summary",
      "visible": _vm.nlpVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.nlpVisible = $event
      }
    }
  }, [_c('h1', [_vm._v("Detected Entities")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "data": _vm.tableData2
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "word",
      "label": "Word",
      "width": "200",
      "header-align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "obj",
      "label": "Entity",
      "header-align": "center"
    }
  })], 1), _vm._v(" "), _c('h1', [_vm._v("Tagged Words")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "word",
      "label": "Word",
      "width": "200",
      "header-align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tag",
      "label": "Tag",
      "width": "200",
      "header-align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "obj",
      "label": "Entity",
      "header-align": "center"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.nlpVisible = false
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1)])])
},staticRenderFns: []}

/***/ })

},[244]);
//# sourceMappingURL=app.2b21fcf8e4903169a464.js.map