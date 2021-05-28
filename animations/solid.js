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
		brightness = parseInt(args.Brightness)
		brightness = Math.max(brightness, 1);
		brightness = Math.min(brightness, 255);
		strip.SetBrightness(brightness);
		strip.SetStripColor(CurrentFadeColor);
	};
}

module.exports = new solid();
