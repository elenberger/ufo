jQuery.sap.declare("sap.ui.zmbr.asrep.Component");

sap.ui.core.UIComponent.extend("sap.ui.zmbr.asrep.Component", {
  init: function()

  {

    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

    var mConfig = this.getMetadata().getConfig();

  },

  createContent: function() {
    

    oView = sap.ui.view({
      type: sap.ui.core.mvc.ViewType.XML,
      id: "app",
      viewName: "sap.ui.zmbr.asrep.RES.App",
      viewData: {
        component: this
      }
    });

    var oResourceModel = new sap.ui.model.resource.ResourceModel({
      bundleName: "sap.ui.zmbr.asrep.i18n.i18n"
    });

    sap.ui.getCore().setModel(oResourceModel, "i18n");
    oView.setModel(oResourceModel, "i18n");

   
    return oView;
  }

});

/*
 * sap.ui.core.UIComponent.extend("mbr.ufo.zasreporting.Component", { init:
 * function() {
 * 
 * sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
 *  // Model var sConn = '/sap/opu/odata/sap/ZUFO_DFRM_SRV'; var oModel = new
 * sap.ui.model.odata.ODataModel(sConn, true); this.setModel(oModel); },
 * 
 * 
 * });
 * 
 * mbr.ufo.zasreporting.Component.prototype.CreateContent = function() { // View
 * this.view = sap.ui.view({type:sap.ui.core.mvc.ViewType.XML,
 * viewName:"RES.App"}); // this.view.setModel(oModel);
 * 
 * return this.view; }
 */