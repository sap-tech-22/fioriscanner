/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"samplefiorisap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
