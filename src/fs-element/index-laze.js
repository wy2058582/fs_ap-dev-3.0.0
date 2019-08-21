export default {
    //fs-element下的组件
    ElPagination: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/pagination'),
    ElAutocomplete: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/autocomplete'),
    ElMenu: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/menu'),
    ElMenuItem: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/menu-item'),
    ElMenuItemGroup: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/menu-item-group'),
    ElSubmenu: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/submenu'),
    ElMainNav: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/main-nav'),
    ElInputNumber: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/input-number'),
    ElRadioButton: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/radio-button'),
    ElCheckboxButton: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/checkbox-button'),
    ElCheckboxGroup: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/checkbox-group'),
    ElSwitch: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/switch'),

    ElTimeSelect: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/time-select'),
    ElTimePicker: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/time-picker'),
    ElBreadcrumb: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/breadcrumb'),
    ElBreadcrumbItem: () => import(/* webpackChunkName: "elpartone" */ 'fs-element/packages/breadcrumb-item'),

    ElTag: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/tag'),
    ElTree: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/tree'),
    ElAlert: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/alert'),
    ElApproval: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/approval'),
    ElSlider: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/slider'),
    ElIcon: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/icon'),
    ElUpload: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/upload'),
    ElProgress: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/progress'),
    ElSpinner: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/spinner'),
    ElCard: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/card'),
    ElRate: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/rate'),
    ElScrollbar: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/scrollbar'),
    ElCollapse: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/collapse'),
    ElCollapseItem: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/collapse-item'),
    ElCascader: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/cascader'),
    ElColorPicker: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/color-picker'),
    ElWelcome: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/welcome'),
    ElRef: () => import(/* webpackChunkName: "elparttwo" */ 'fs-element/packages/ifbp-ref'),

    IfbpTileProgress: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbpTileProgress'),
    IfbpRefPanel: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-ref-panel'),
    IfbpAddressRef: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-address-ref'),
    ifbpFileUpload: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-file-upload'),
    IfbpRefCustomDialog: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-ref-custom-dialog'),
    IfbpImage: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-image'),
    IfbpColorPicker: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-color-picker'),
    IfbpDelDialog: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-del-dialog'),
    IfbpDialog: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-dialog'),
    IfbpNoData: () => import(/* webpackChunkName: "fspartone" */ 'fs-element/packages/ifbp-no-data'),

    ElDayBusiness: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/day-business'),
    ElSideDialog: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/side-dialog'),
    ElTile: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/fs-tile'),
    ElCustomerRepay: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/customer-repay'),
    ElTab: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/tab'),
    ElEditableTable: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/editable-table'),
    ElEditForm: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/edit-form'),
    ElSearchForm: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/search-form'),
    ElFormComponent: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/form-component'),
    ElEmailTable: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/email-table'),
    ElSearchSelect: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/search-select'),
    ElSelectItem: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/select-item'),
    ElTransfer: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/transfer'),
    ElImagePreviewer: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/image-previewer'),
    MtDatetimePicker: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/datetime-picker'),
    MtPicker: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/picker'),
    MtPopup: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/popup'),
    Mbtree: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/mbtree'),
    ElTextarea: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/textarea'),
    ElNumber: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/number'),
    ElMoney: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/money'),
    ElPercent: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/percent'),
    ElEmail: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/email'),
    ElPhone: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/phone'),
    ElUser: () => import(/* webpackChunkName: "elpartthree" */ 'fs-element/packages/user'),

    IfbpSearch: () => import(/* webpackChunkName: "fsparttwo1" */ 'fs-element/packages/ifbp-search'),
    IfbpSearchDialog: () => import(/* webpackChunkName: "fsparttwo1" */ 'fs-element/packages/ifbp-search-dialog'),
    // IfbpDynamicPanel: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-dynamic-panel'),
    IfbpMultilingual: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-multilingual'),
    IfbpGrandsonPage: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-grandson-page'),
    IfbpFooter: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-footer'),


    IfbpButtonArea: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-button-area'),
    IfbpFormButtonArea: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-form-button-area'),
    IfbpBreadcrumb: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-breadcrumb'),
    IfbpUpload: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-upload'),
    IfbpFomulaDesigner: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-fomula-designer'),
    IfbpTableCardIcon: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-table-card-icon'),
    IfbpDefaultValueInput: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-default-value-input'),
    IfbpInitiateFlow: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-initiate-flow'),
    IfbpAppletIcons: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-applet-icons'),
    IfbpIconSelect: () => import(/* webpackChunkName: "fsparttwo" */ 'fs-element/packages/ifbp-icon-select'),
    IfbpBulletCharts: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-bullet-charts'),
    IfbpArrowKpi: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-arrow-kpi'),
    IfbpToggleColumn: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-toggle-column'),
    IfbpRouterPage: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-router-page'),
    IfbpTips: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-tips'),
    IfbpStepsExtend: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-steps-extend'),
    IfbpRefTips: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-ref-tips'),
    IfbpTooltip: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-tooltip'),
    IfbpTableImage: () => import(/* webpackChunkName: "fspartthree" */ 'fs-element/packages/ifbp-table-image'),
};