function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n\n\n  <ion-split-pane contentId=\"main-content\" [when]=\"false\">\n\n\n    <ion-menu [ngClass]=\"isPlatformBrowser ?  'menuPanel fixed-menu' : 'menuPanel floating-menu'\"\n      contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list class=\"listMenu\" padding-top>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of appPages\">\n            <ion-item [disabled]=\"page.disable\" routerDirection=\"root\" [routerLink]=\"[page.url]\" lines=\"none\"\n              detail=\"false\">\n              <ion-icon [name]=\"page.icon\" item-left color=\"tertiary\"></ion-icon>\n              <ion-label color=\"tertiary\">{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        \n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item  *ngIf=\"isRootUser\" lines=\"none\" detail=\"false\"\n              (click)=\"appReboot()\">\n              <ion-icon name=\"reload-outline\" item-left color=\"tertiary\"></ion-icon>\n              <ion-label color=\"tertiary\">Reboot App</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-item lines=\"none\" detail=\"false\" (click)=\"signOut()\">\n            <ion-icon name=\"log-out-outline\" item-left color=\"tertiary\"></ion-icon>\n            <ion-label color=\"tertiary\">Sign Out</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n\n      <div class=\"version-name\" *ngIf=\"appVersionNo\">\n        <ion-text color=\"tertiary\">\n          Version {{ appVersionNo }}\n        </ion-text>\n      </div>\n\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n  <!-- <ion-router-outlet>Version</ion-router-outlet> -->\n\n  <!-- <ion-footer>{{appVersionNo}}</ion-footer> -->\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes/goods-receipt-notes.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes/goods-receipt-notes.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcPagesGoodsReceiptNotesGoodsReceiptNotesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"primaryDark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" routerLink=\"/home\" icon=\"chevron-back-outline\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titleHeader\">\n      <ion-text class=\"titleText\">GRN</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size=\"12\" *ngFor=\"let grn of grn; let i=index;\">\n        <ion-card>\n          <!-- <img src=\"../../assets/icon/po.png\" alt=\"{{po.documentNumber}}\"/> -->\n          <ion-item color=\"primary\">\n            <ion-label>\n              {{grn.customerName}}\n            </ion-label>\n          </ion-item>\n          <ion-card-header>\n            <ion-card-subtitle>{{grn.documentNumber}}</ion-card-subtitle>\n            <ion-card-subtitle>{{grn.status}}</ion-card-subtitle>\n            <ion-card-subtitle>{{grn.date}}</ion-card-subtitle>\n            <ion-card-subtitle>{{grn.totalNetAmount}}</ion-card-subtitle>\n            <ion-card-subtitle>{{grn.customerAddress}}</ion-card-subtitle>\n\n            <ion-button (click)=\"viewGrn(grn._id)\">View</ion-button>\n\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-order-view/purchase-order-view.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-order-view/purchase-order-view.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcPagesPurchaseOrderViewPurchaseOrderViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"primaryDark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" routerLink=\"/purchase-orders\" icon=\"chevron-back-outline\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titleHeader\">\n      <ion-text class=\"titleText\">PURCHASE ORDER</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding whiteSmoke-background\">\n    <ion-grid>\n        <ion-row class=\"primaryLight\">\n          <ion-col size=\"2\">\n        <ion-img class=\"icons2\" src=\"../../assets/icon/customer.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"10\">\n     <span class=\"text2\" style=\"font-size: 14px;\">{{purchaseOrder.customerName}} </span>\n    </ion-col>\n        </ion-row>\n    <ion-row>\n      <ion-col size=\"1.5\">\n        <ion-img class=\"icons\" src=\"../../assets/icon/number.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"5.5\">\n        <span class=\"text2\" style=\"font-size: 14px;\"> {{purchaseOrder.documentNumber}}</span>\n      </ion-col>\n      <ion-col>\n        <ion-col size=\"1.5\">\n          <!-- <ion-icon name=\"today-outline\" class=\"icons\" item-start color=\"primary\"></ion-icon> -->\n          <ion-icon name=\"calendar-outline\" class=\"icons\" color=\"primary\" ></ion-icon>\n        </ion-col >\n        <ion-col size=\"4\"  style=\"font-size: 14px;\"> {{purchaseOrder.date}}</ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"10\" style=\"font-size: 14px;\">\n       Bill to Customer Code: {{purchaseOrder.customerCode}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"2\" ></ion-col>\n      <ion-col size=\"4\" ><ion-text color=\"primary\" style=\"font-size: 12px;\">Item Code</ion-text></ion-col>\n      <ion-col size=\"6\" ><ion-text color=\"primary\" style=\"font-size: 12px;\">Item Name</ion-text></ion-col>\n    </ion-row>\n    <ion-card class=\"card\"\n      *ngFor=\"let item of items; let i=index;\">\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"1\">{{i+1}}.</ion-col>\n            <ion-col size=\"3\" >\n              <ion-text color=\"primary\"> <h4>{{item.itemCode}}</h4></ion-text>\n            </ion-col>\n            <ion-col size=\"7\" >\n              <ion-text style=\"text-align: center;\"> <h4><b>{{item.itemName}}</b></h4></ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n          \n            <ion-col class=\"ion-col\" size=\"4.9\">Order Quantity</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col class=\"ion-col2\" size=\"4.9\">{{item.purchaseQuantity}}</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col size=\"2\" class=\"ion-col\" text-center>{{item.purchaseUOM}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-col\" size=\"4.9\">Pending Quantity</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col class=\"ion-col2\" size=\"4.9\">{{item.pendingQuantity}}</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col size=\"2\" class=\"ion-col\" text-center>{{item.purchaseUOM}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-col\" size=\"4.9\">Rate</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col  class=\"ion-col2\"  size=\"4.9\">{{item.rate}}</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col size=\"2\" class=\"ion-col\" text-center>Rs.</ion-col>\n          </ion-row>\n          <ion-row>\n           \n            <ion-col class=\"ion-col\"  size=\"4.9\">Net</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col class=\"ion-col2\"  size=\"4.9\">{{item.netAmount}}</ion-col>\n            <ion-col size=\"0.1\"></ion-col>\n            <ion-col size=\"2\" class=\"ion-col\" text-center>Rs.</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"9\"></ion-col>\n            <ion-col>\n              <a (click)=\"item.showMore = !item.showMore\"><span  style=\"color: rgb(196, 190, 190);\" >Show </span><span  style=\"color: rgb(196, 190, 190);\" [innerHtml]=\"item.showMore ? 'less  &#x25B2;' : 'more &#x25BC;'\">\n                </span></a>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=item.showMore>\n            <ion-row>\n              <ion-col class=\"ion-col\" size=\"4.9\"> FreeQuantity</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col class=\"ion-col2\" size=\"4.9\">{{item.freeQuantity}}</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col size=\"2\" class=\"ion-col\" text-center>{{item.purchaseUOM}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-col\" size=\"4.9\">GrossAmount</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col class=\"ion-col2\" size=\"4.9\">{{item.grossAmount}}</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col size=\"2\" class=\"ion-col\" text-center>Rs.</ion-col>\n            </ion-row>\n            <ion-row>\n    \n              <ion-col class=\"ion-col\" size=\"4.9\">TaxAmount</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col class=\"ion-col2\" size=\"4.9\">{{item.taxAmount}}</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col size=\"2\" class=\"ion-col\" text-center>Rs.</ion-col>\n            </ion-row>\n            <ion-row>\n             \n              <ion-col class=\"ion-col\" size=\"4.9\">TaxPercentage</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col class=\"ion-col2\" size=\"4.9\">{{item.taxPercentage}}</ion-col>\n              <ion-col size=\"0.1\"></ion-col>\n              <ion-col size=\"2\" class=\"ion-col\" text-center>%</ion-col>\n            </ion-row>\n          </div>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n\n  <div class=\"footer\">\n    <div style=\"text-align: center;\">\n      <ion-button color=\"secondary\"  (click)=\"fulfill(purchaseOrder._id)\">FULFILL</ion-button>\n    </div>\n  </div>\n  <!-- <ion-col size=\"12\" class=\"ion-text-center\">\n    \n  </ion-col> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ../pages/login/login.module */
        "./src/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ../pages/home/home.module */
        "./src/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'purchase-orders',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-purchase-orders-purchase-orders-module */
        "pages-purchase-orders-purchase-orders-module").then(__webpack_require__.bind(null,
        /*! ../pages/purchase-orders/purchase-orders.module */
        "./src/pages/purchase-orders/purchase-orders.module.ts")).then(function (m) {
          return m.PurchaseOrdersPageModule;
        });
      }
    }, {
      path: 'goods-receipt-notes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-goods-receipt-notes-goods-receipt-notes-module */
        "pages-goods-receipt-notes-goods-receipt-notes-module").then(__webpack_require__.bind(null,
        /*! ../pages/goods-receipt-notes/goods-receipt-notes.module */
        "./src/pages/goods-receipt-notes/goods-receipt-notes.module.ts")).then(function (m) {
          return m.GoodsReceiptNotesPageModule;
        });
      }
    }, {
      path: 'purchase-orders/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-purchase-order-view-purchase-order-view-module */
        "pages-purchase-order-view-purchase-order-view-module").then(__webpack_require__.bind(null,
        /*! ../pages/purchase-order-view/purchase-order-view.module */
        "./src/pages/purchase-order-view/purchase-order-view.module.ts")).then(function (m) {
          return m.PurchaseOrderViewPageModule;
        });
      }
    }, {
      path: 'fulfill-order/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-fulfill-order-fulfill-order-module */
        "pages-fulfill-order-fulfill-order-module").then(__webpack_require__.bind(null,
        /*! ../pages/fulfill-order/fulfill-order.module */
        "./src/pages/fulfill-order/fulfill-order.module.ts")).then(function (m) {
          return m.FulfillOrderPageModule;
        });
      }
    }, {
      path: 'goods-receipt-notes/:id',
      // tslint:disable-next-line:max-line-length
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-goods-receipt-notes-view-goods-receipt-notes-view-module */
        "pages-goods-receipt-notes-view-goods-receipt-notes-view-module").then(__webpack_require__.bind(null,
        /*! ../pages/goods-receipt-notes-view/goods-receipt-notes-view.module */
        "./src/pages/goods-receipt-notes-view/goods-receipt-notes-view.module.ts")).then(function (m) {
          return m.GoodsReceiptNotesViewPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-profile-profile-module */
        "pages-profile-profile-module").then(__webpack_require__.bind(null,
        /*! ../pages/profile/profile.module */
        "./src/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'order-confirmation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-order-confirmation-order-confirmation-module */
        "pages-order-confirmation-order-confirmation-module").then(__webpack_require__.bind(null,
        /*! ../pages/order-confirmation/order-confirmation.module */
        "./src/pages/order-confirmation/order-confirmation.module.ts")).then(function (m) {
          return m.OrderConfirmationPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label:hover {\n  cursor: pointer;\n}\n\nion-label {\n  margin-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXG1lZGljc19EZXZlbG9wbWVudFxcc3VwcGxpZXJfYXBwXFxtZWRpY3MtZ3JpZC1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/storage/storage.service */
    "./src/services/storage/storage.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/services/utility/utility.service */
    "./src/services/utility/utility.service.ts");
    /* harmony import */


    var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/services/http/http.service */
    "./src/services/http/http.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appVersion, storageService, router, platform, statusBar, splashScreen, utilityService, httpService, fcm) {
        _classCallCheck(this, AppComponent);

        this.appVersion = appVersion;
        this.storageService = storageService;
        this.router = router;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.utilityService = utilityService;
        this.httpService = httpService;
        this.fcm = fcm;
        this.isPlatformBrowser = false;
        this.isAdminUser = false;
        this.isRootUser = false;
        console.log('All platforms', platform.platforms());

        if (this.platform.is('desktop')) {
          this.isPlatformBrowser = true;
        } else {
          this.isPlatformBrowser = false;
        }

        console.log('Platform browser : ', this.isPlatformBrowser); // this.initializeApp();

        this.appPages = [{
          title: 'Home',
          url: '/home',
          icon: 'home'
        }, {
          title: 'Profile',
          url: '/profile',
          icon: 'person-circle-outline'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.appVersion.getVersionNumber().then(function (value) {
              _this.appVersionNo = value;
            })["catch"](function (err) {
              console.log(err);
            });

            _this.statusBar.styleLightContent();

            _this.splashScreen.hide(); // timer(3000).subscribe(() => this.showSplash = false );


            if (_this.platform.is('cordova')) {
              _this.autoLogin();
            }
          });
        }
      }, {
        key: "appReboot",
        value: function appReboot() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = '/app/reboot';
                    _context.next = 3;
                    return this.httpService.get(url).then(function (response) {
                      _this2.utilityService.presentAlert('Rebooting', response.message);
                    })["catch"](function (error) {
                      console.log('Error', error);

                      _this2.utilityService.presentAlert('Error!', error.message);
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.storageService.clearStorage();
          this.router.navigate(['login']);
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storageService.getStoredData().then(function (data) {
                      var user = _this3.storageService.get('user');

                      if (user.token) {
                        _this3.router.navigate(['home']);
                      }
                    })["catch"](function (error) {});

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"]
      }, {
        type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: src_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
      }, {
        type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }, {
        type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_user_authentication_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../services/user-authentication/auth-gaurd.service */
    "./src/services/user-authentication/auth-gaurd.service.ts");
    /* harmony import */


    var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../services/storage/storage.service */
    "./src/services/storage/storage.service.ts");
    /* harmony import */


    var _services_http_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../services/http/http.service */
    "./src/services/http/http.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_pages_purchase_order_view_purchase_order_view_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/pages/purchase-order-view/purchase-order-view.page */
    "./src/pages/purchase-order-view/purchase-order-view.page.ts");
    /* harmony import */


    var src_pages_goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/pages/goods-receipt-notes/goods-receipt-notes.page */
    "./src/pages/goods-receipt-notes/goods-receipt-notes.page.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/__ivy_ngcc__/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
        menuType: 'overlay'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], src_pages_purchase_order_view_purchase_order_view_page__WEBPACK_IMPORTED_MODULE_17__["PurchaseOrderViewPage"], src_pages_goods_receipt_notes_goods_receipt_notes_page__WEBPACK_IMPORTED_MODULE_18__["GoodsReceiptNotesPage"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_19__["FCM"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }, _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_16__["AppVersion"], _services_user_authentication_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_13__["AuthGaurdService"]],
      entryComponents: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MaterialModule_1;

    var MaterialModule = MaterialModule_1 = /*#__PURE__*/function () {
      function MaterialModule(matIconRegistry) {
        _classCallCheck(this, MaterialModule);

        this.matIconRegistry = matIconRegistry; // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
      }

      _createClass(MaterialModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: MaterialModule_1,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]]
          };
        }
      }]);

      return MaterialModule;
    }();

    MaterialModule.ctorParameters = function () {
      return [{
        type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]
      }];
    };

    MaterialModule = MaterialModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]],
      exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]],
      providers: []
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // Cloud server
      // BASE_URL: 'https://medicsprime.in/medicscare',
      // BASE_URL: 'http://localhost:3000',
      BASE_URL: 'http://182.71.148.154:5066',
      HOSPITAL_ID: null,
      APP_ID: 'medics'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes/goods-receipt-notes.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/pages/goods-receipt-notes/goods-receipt-notes.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcPagesGoodsReceiptNotesGoodsReceiptNotesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvZ29vZHMtcmVjZWlwdC1ub3Rlcy9nb29kcy1yZWNlaXB0LW5vdGVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/pages/goods-receipt-notes/goods-receipt-notes.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/pages/goods-receipt-notes/goods-receipt-notes.page.ts ***!
    \*******************************************************************/

  /*! exports provided: GoodsReceiptNotesPage */

  /***/
  function srcPagesGoodsReceiptNotesGoodsReceiptNotesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsReceiptNotesPage", function () {
      return GoodsReceiptNotesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/http/http.service */
    "./src/services/http/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/storage/storage.service */
    "./src/services/storage/storage.service.ts");

    var GoodsReceiptNotesPage = /*#__PURE__*/function () {
      function GoodsReceiptNotesPage(httpService, router, storageService) {
        _classCallCheck(this, GoodsReceiptNotesPage);

        this.httpService = httpService;
        this.router = router;
        this.storageService = storageService;
        this.grn = [];
      }

      _createClass(GoodsReceiptNotesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storageService.get('supplier');

                  case 2:
                    this.supplierDetails = _context3.sent;
                    this.supplierCode = this.supplierDetails.code;
                    console.log('SupplierCode: ' + this.supplierCode);
                    this.getGRN();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getGRN",
        value: function getGRN() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    url = "/ops/purchaseOrders/?supplierCode=".concat(this.supplierCode);
                    console.log(url);
                    _context4.next = 4;
                    return this.httpService.get(url).then(function (goodsReceiptNotes) {
                      if (goodsReceiptNotes) {
                        _this4.grn = goodsReceiptNotes;
                        console.log('Goods Receipt Notes...', _this4.grn);
                      }
                    })["catch"](function (error) {
                      console.log('Error', error);
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "viewGrn",
        value: function viewGrn(GrnId) {
          console.log(GrnId);
          this.router.navigate(['/goods-receipt-notes', GrnId]);
        }
      }, {
        key: "getGrnid",
        value: function getGrnid(id) {
          console.log(this.grn);
          return this.grn.find(function (p) {
            return p._id === id;
          });
        }
      }]);

      return GoodsReceiptNotesPage;
    }();

    GoodsReceiptNotesPage.ctorParameters = function () {
      return [{
        type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }];
    };

    GoodsReceiptNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-goods-receipt-notes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./goods-receipt-notes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/pages/goods-receipt-notes/goods-receipt-notes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./goods-receipt-notes.page.scss */
      "./src/pages/goods-receipt-notes/goods-receipt-notes.page.scss"))["default"]]
    })], GoodsReceiptNotesPage);
    /***/
  },

  /***/
  "./src/pages/purchase-order-view/purchase-order-view.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/pages/purchase-order-view/purchase-order-view.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcPagesPurchaseOrderViewPurchaseOrderViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-thin-col {\n  flex: 0 0 4px;\n}\n\n.text2 {\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-item {\n  padding: 0;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 2px dashed rgba(114, 186, 94, 0.35);\n  height: 400px;\n  background: rgba(114, 186, 94, 0.05);\n}\n\n.stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.ion-col-fixed {\n  size: \"8\";\n}\n\n.bgcolor {\n  background: #F5F5F6;\n}\n\n.footer {\n  width: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  color: #070000;\n}\n\n.ion-col {\n  background: #F5F5F6;\n  text-align: center;\n}\n\n.ion-col2 {\n  background: #F5F5F6;\n  text-align: right;\n}\n\n.button-size {\n  width: 80%;\n}\n\n.bcolor {\n  color: gray;\n}\n\n.addIcon {\n  width: 40px;\n  height: 50px;\n  padding-left: 0;\n}\n\n.icons {\n  display: inline-block;\n  vertical-align: middle;\n  width: 30px;\n  height: 30px;\n  margin-left: 9px;\n}\n\n.icons2 {\n  display: inline-block;\n  vertical-align: middle;\n  width: 35px;\n  height: 35px;\n  margin-left: 9px;\n}\n\n.text-align-middle {\n  position: relative;\n  transform: translateY(10px);\n}\n\n.card {\n  box-shadow: none !important;\n}\n\nion-card-content .icons {\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  margin-left: 10px;\n}\n\nion-card-content ion-row {\n  margin-top: 3px;\n}\n\n.item-inner {\n  border-style: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wdXJjaGFzZS1vcmRlci12aWV3L0Y6XFxtZWRpY3NfRGV2ZWxvcG1lbnRcXHN1cHBsaWVyX2FwcFxcbWVkaWNzLWdyaWQtYXBwL3NyY1xccGFnZXNcXHB1cmNoYXNlLW9yZGVyLXZpZXdcXHB1cmNoYXNlLW9yZGVyLXZpZXcucGFnZS5zY3NzIiwic3JjL3BhZ2VzL3B1cmNoYXNlLW9yZGVyLXZpZXcvcHVyY2hhc2Utb3JkZXItdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUU7RUFDRSxVQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUVBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDR0o7O0FEQUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtBQ0dKOztBRERFO0VBQ0UsU0FBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7QUNLSjs7QURIRTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREZFO0VBR0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREVFO0VBQ0UsVUFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREs7RUFDQyxxQkFBQTtFQUVFLHNCQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0daOztBRERRO0VBQ0UscUJBQUE7RUFFRSxzQkFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7O0FEQUk7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFFQSwyQkFBQTtBQ0dBOztBREVFO0VBQ0UscUJBQUE7RUFFRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBTjs7QURHRTtFQUNJLGVBQUE7QUNETjs7QURJQTtFQUNFLDhCQUFBO0FDREYiLCJmaWxlIjoic3JjL3BhZ2VzL3B1cmNoYXNlLW9yZGVyLXZpZXcvcHVyY2hhc2Utb3JkZXItdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktdGhpbi1jb2wge1xyXG4gICAgZmxleDogMCAwIDRweDtcclxuICB9XHJcbiAgLnRleHQyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDExNCwgMTg2LCA5NCwgMC4zNSk7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDE4NiwgOTQsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAuc3RpY2sge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLmlvbi1jb2wtZml4ZWR7XHJcbiAgICBzaXplOlwiOFwiO1xyXG4gIH1cclxuICAuYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiNGNUY1RjY7XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29sb3I6IHJnYig3LCAwLCAwKTtcclxufVxyXG4gIFxyXG4gIC5pb24tY29sIHtcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNztcclxuICAgLy8gc2l6ZTogNjtcclxuICAgIGJhY2tncm91bmQ6I0Y1RjVGNjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlvbi1jb2wyIHtcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNztcclxuICAgLy8gc2l6ZTogNjtcclxuICAgIGJhY2tncm91bmQ6I0Y1RjVGNjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcblxyXG4gIC5idXR0b24tc2l6ZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5iY29sb3J7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbiAgLmFkZEljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAgLmljb25zIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAuaWNvbnMyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC8vICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICBcclxuICAgIC50ZXh0LWFsaWduLW1pZGRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICB9XHJcbi5jYXJkXHJcbntcclxuYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnRcclxufVxyXG4gICAgXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIC8vIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH0gXHJcblxyXG4gIGlvbi1yb3cge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gIGJvcmRlci1zdHlsZTogdW5zZXQgIWltcG9ydGFudDtcclxuICB9IiwiLm15LXRoaW4tY29sIHtcbiAgZmxleDogMCAwIDRweDtcbn1cblxuLnRleHQyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDExNCwgMTg2LCA5NCwgMC4zNSk7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxODYsIDk0LCAwLjA1KTtcbn1cblxuLnN0aWNrIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbi5pb24tY29sLWZpeGVkIHtcbiAgc2l6ZTogXCI4XCI7XG59XG5cbi5iZ2NvbG9yIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNjtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIzA3MDAwMDtcbn1cblxuLmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY29sMiB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9uLXNpemUge1xuICB3aWR0aDogODAlO1xufVxuXG4uYmNvbG9yIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5hZGRJY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5pY29uczIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi50ZXh0LWFsaWduLW1pZGRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCAuaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24tcm93IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/pages/purchase-order-view/purchase-order-view.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/pages/purchase-order-view/purchase-order-view.page.ts ***!
    \*******************************************************************/

  /*! exports provided: PurchaseOrderViewPage */

  /***/
  function srcPagesPurchaseOrderViewPurchaseOrderViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseOrderViewPage", function () {
      return PurchaseOrderViewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/http/http.service */
    "./src/services/http/http.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PurchaseOrderViewPage = /*#__PURE__*/function () {
      function PurchaseOrderViewPage(route, router, httpService, platform) {
        _classCallCheck(this, PurchaseOrderViewPage);

        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.platform = platform;
        this.purchaseOrder = [];
        this.items = [];
        this.isShow = false;
        this.items = this.items.map(function (item) {
          return Object.assign(Object.assign({}, item), {
            showMore: false
          });
        });
        console.log('mapped: ' + this.items);
      }

      _createClass(PurchaseOrderViewPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');

            _this5.router.navigate(['purchase-orders']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:no-string-literal
          var id = this.route.snapshot.params['id']; // this.purchaseOrders.getPOid(id);

          console.log(id);
          this.getPOId(id);
          this.expbutton = 'Show more';
        }
      }, {
        key: "getPOId",
        value: function getPOId(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    url = '/supplier/purchaseOrder/' + id;
                    _context5.next = 3;
                    return this.httpService.get(url).then(function (purchaseOrders) {
                      if (purchaseOrders) {
                        _this6.purchaseOrder = purchaseOrders[0];
                        _this6.items = purchaseOrders[0].items; // console.log(this.purchaseOrder);
                      }
                    })["catch"](function (error) {
                      console.log('Error', error);
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "fulfill",
        value: function fulfill(poId) {
          this.router.navigate(['/fulfill-order', poId]);
        }
      }]);

      return PurchaseOrderViewPage;
    }();

    PurchaseOrderViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    PurchaseOrderViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase-order-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./purchase-order-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/pages/purchase-order-view/purchase-order-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./purchase-order-view.page.scss */
      "./src/pages/purchase-order-view/purchase-order-view.page.scss"))["default"]]
    })], PurchaseOrderViewPage);
    /***/
  },

  /***/
  "./src/services/http/http.service.ts":
  /*!*******************************************!*\
    !*** ./src/services/http/http.service.ts ***!
    \*******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcServicesHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../utility/utility.service */
    "./src/services/utility/utility.service.ts");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../storage/storage.service */
    "./src/services/storage/storage.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(httpClient, utilityService, storageService, // private nativeHTTP: HTTP,
      platform, router) {
        _classCallCheck(this, HttpService);

        this.httpClient = httpClient;
        this.utilityService = utilityService;
        this.storageService = storageService;
        this.platform = platform;
        this.router = router;
        this.rootURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL;
      }

      _createClass(HttpService, [{
        key: "getHeader",
        value: function getHeader() {
          var user = this.storageService.get('user');
          return {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + (user ? user.token : '') // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            // Accept: 'application/json'

          };
        }
      }, {
        key: "getHeaderOptions",
        value: function getHeaderOptions() {
          var header = this.getHeader();
          return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"](header)
          };
        }
      }, {
        key: "get",
        value: function get(actionURL) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            var serverURL;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    serverURL = this.rootURL + actionURL;
                    _context6.next = 3;
                    return this.httpClient.get(serverURL, this.getHeaderOptions()).toPromise().then(function (data) {
                      console.log('Sync URL', serverURL);
                      console.log('Sync Response', data);
                      console.log('-----------------------------------------------------------');
                      return data; // persistance logic
                    }, function (error) {
                      console.log('Sync Error', error);

                      if (error.status === 0) {
                        throw new Error('Server not accessible.');
                      } else if (error.error.code === 'TOKEN_EXPIRED') {
                        _this7.router.navigate(['sign-in']);
                      } else {
                        if (error.error) {
                          error.message = error.error.message;
                        }

                        throw error;
                      }

                      return null;
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "post",
        value: function post(actionURL, body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            var serverURL;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    serverURL = this.rootURL + actionURL;
                    return _context7.abrupt("return", this.httpClient.post(serverURL, body, this.getHeaderOptions()).toPromise().then(function (data) {
                      // data = data.trim();
                      console.log('Sync URL', serverURL);
                      console.log('Sync Response', data);
                      console.log('-----------------------------------------------------------');
                      return data;
                    }, function (error) {
                      console.log('Sync Error', error);

                      if (error.status === 0) {
                        throw new Error('Server not accessible.');
                      } else if (error.error.code === 'TOKEN_EXPIRED') {
                        _this8.router.navigate(['sign-in']);
                      } else {
                        if (error.error) {
                          error.message = error.error.message;
                        }

                        throw error;
                      }

                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "put",
        value: function put(actionURL, body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            var serverURL;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    serverURL = this.rootURL + actionURL;
                    return _context8.abrupt("return", this.httpClient.put(serverURL, body, this.getHeaderOptions()).toPromise().then(function (data) {
                      // data = data.trim();
                      console.log('Sync URL', serverURL);
                      console.log('Sync Response', data);
                      console.log('-----------------------------------------------------------');
                      return data;
                    }, function (error) {
                      console.log('Sync Error', error);

                      if (error.status === 0) {
                        throw new Error('Server not accessible.');
                      } else if (error.error.code === 'TOKEN_EXPIRED') {
                        _this9.router.navigate(['sign-in']);
                      } else {
                        if (error.error) {
                          error.message = error.error.message;
                        }

                        throw error;
                      }

                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(actionURL) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this10 = this;

            var serverURL;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    serverURL = this.rootURL + actionURL;
                    _context9.next = 3;
                    return this.httpClient["delete"](serverURL, this.getHeaderOptions()).toPromise().then(function (data) {
                      console.log('Sync URL', serverURL);
                      console.log('Sync Response', data);
                      console.log('-----------------------------------------------------------');
                      return data; // persistance logic
                    }, function (error) {
                      console.log('Sync Error', error);

                      if (error.status === 0) {
                        throw new Error('Server not accessible.');
                      } else if (error.error.code === 'TOKEN_EXPIRED') {
                        _this10.router.navigate(['sign-in']);
                      } else {
                        if (error.error) {
                          error.message = error.error.message;
                        }

                        throw error;
                      }

                      return null;
                    });

                  case 3:
                    return _context9.abrupt("return", _context9.sent);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/services/storage/storage.service.ts":
  /*!*************************************************!*\
    !*** ./src/services/storage/storage.service.ts ***!
    \*************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        // const _storageMap = new Map<string, any>();
        // // get all the keys and put into storageMap
        // this.storage.forEach(function (value, key, iterationNumber) {
        //   console.log(key);
        this.storage = storage;
        this.storageMap = new Map(); //   try {
        //     _storageMap.set(key, value);
        //   } catch (e) {
        //     console.error(e);
        //   }
        //   console.log('.. Added');
        // }).then(() => {
        //   this.storageMap = _storageMap;
        // });

        this.getStoredData();
      }

      _createClass(StorageService, [{
        key: "get",
        value: function get(key) {
          return this.storageMap.get(key);
        }
      }, {
        key: "set",
        value: function set(key, value, toLocalStore) {
          if (toLocalStore) {
            this.storage.set(key, value);
          }

          this.storageMap.set(key, value);
        }
      }, {
        key: "remove",
        value: function remove(key) {
          this.storage.remove(key);
          this.storageMap.set(key, null);
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          this.storage.clear();
          this.storageMap.clear();
          console.log('Storage Cleared');
        }
      }, {
        key: "getStoredData",
        value: function getStoredData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this11 = this;

            var _storageMap;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _storageMap = new Map(); // get all the keys and put into storageMap

                    _context10.next = 3;
                    return this.storage.forEach(function (value, key, iterationNumber) {
                      console.log(key);

                      try {
                        _storageMap.set(key, value);
                      } catch (e) {
                        console.error(e);
                      }

                      console.log('.. Added');
                    }).then(function () {
                      _this11.storageMap = _storageMap;
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/services/user-authentication/auth-gaurd.service.ts":
  /*!****************************************************************!*\
    !*** ./src/services/user-authentication/auth-gaurd.service.ts ***!
    \****************************************************************/

  /*! exports provided: AuthGaurdService */

  /***/
  function srcServicesUserAuthenticationAuthGaurdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function () {
      return AuthGaurdService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/services/storage/storage.service.ts");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http/http.service */
    "./src/services/http/http.service.ts");

    var AuthGaurdService = /*#__PURE__*/function () {
      function AuthGaurdService(storageService, httpService) {
        _classCallCheck(this, AuthGaurdService);

        this.storageService = storageService;
        this.httpService = httpService;
      }

      _createClass(AuthGaurdService, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.storageService.getStoredData().then(function (data) {
                      var user = _this12.storageService.get('user');

                      if (user.token) {
                        var verifyOTPURL = '/user/verifyToken';

                        _this12.httpService.get(verifyOTPURL).then(function (datas) {
                          console.log('Verify token Successfully', datas);

                          if (datas.data.profileId !== null) {
                            return false;
                          }
                        })["catch"](function (error) {
                          console.log('Error', error);
                        });
                      }
                    })["catch"](function (error) {});

                  case 2:
                    return _context11.abrupt("return", true);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return AuthGaurdService;
    }();

    AuthGaurdService.ctorParameters = function () {
      return [{
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    AuthGaurdService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGaurdService);
    /***/
  },

  /***/
  "./src/services/utility/utility.service.ts":
  /*!*************************************************!*\
    !*** ./src/services/utility/utility.service.ts ***!
    \*************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcServicesUtilityUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var UtilityService = /*#__PURE__*/function () {
      function UtilityService(alertController, toastController) {
        _classCallCheck(this, UtilityService);

        this.alertController = alertController;
        this.toastController = toastController;
        this.showSpinner = false;
        this.appHashCode = ''; // this.getAppHashCode();
      }

      _createClass(UtilityService, [{
        key: "presentToast",
        value: function presentToast(toastMessage, toastDuration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastController.create({
                      message: toastMessage,
                      duration: toastDuration
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "toISODateTime",
        value: function toISODateTime(date) {
          // return date.toISOString();
          var isoDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
          return isoDate;
        }
      }, {
        key: "toTitleCase",
        value: function toTitleCase(str) {
          str = str.toLowerCase().split(' ');

          for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          }

          return str.join(' ');
        }
      }, {
        key: "dateFormat",
        value: function dateFormat(date) {
          var day = (date.getDate() + 1).toString();
          day = +day < 10 ? '0' + day : day;
          var month = (date.getMonth() + 1).toString();
          month = +month < 10 ? '0' + month : month;
          var year = date.getFullYear().toString();
          var time = date.toLocaleTimeString();
          return day + '/' + month + '/' + year;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(subheader, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var alert;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.alertController.create({
                      header: subheader,
                      // tslint:disable-next-line: object-literal-shorthand
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context13.sent;
                    _context13.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilityService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\medics_Development\supplier_app\medics-grid-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map