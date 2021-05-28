/*******************************
	christmas animations
*******************************/
var common = require("./common.js");
var name = "solid.js";

/*******************************
	Solid methods
*******************************/

var CurrentFadeColor;
var Brightness = 255;

function solid() {
	this.Solid = function (args, strip) {
		strip.Mode = name + "rainbow";
		CurrentFadeColor = parseInt("0x" + args.Color);
		Brightness = parseInt("0x" + args.Brightness);
		strip.SetBrightness(Brightness);
		strip.SetStripColor(CurrentFadeColor);
	};
}

module.exports = new solid();
