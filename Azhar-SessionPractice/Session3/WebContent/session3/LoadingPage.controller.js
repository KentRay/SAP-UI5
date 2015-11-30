sap.ui.controller("session3.LoadingPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf session3.LoadingPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf session3.LoadingPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf session3.LoadingPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf session3.LoadingPage
*/
//	onExit: function() {
//
//	}
	
	onClick: function() 
	{
		alert("You clicked me....");
	},
	
	onClick_E: function() 
	{
		alert("You clicked emphasized....");
	},
	
	onClick_A: function() 
	{
		alert("You clicked accept....");
	},
	
	onClick_R: function() 
	{
		alert("You clicked reject....");
	}
});