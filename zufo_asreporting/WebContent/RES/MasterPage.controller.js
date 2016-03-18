sap.ui.controller("sap.ui.zmbr.asrep.RES.MasterPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf RES.MasterPage
*/
	onInit: function() {

	},

	 onItemPress: function (evt) {
		 var context = evt.getSource().getBindingContext();
		 		 
		 this.nav.to("DetailPage", context);
		 
	 }
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf RES.MasterPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf RES.MasterPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf RES.MasterPage
*/
//	onExit: function() {
//
//	}

});