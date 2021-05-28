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
		CurrentFadeColor = parseInt("0x" + args.Color);
		Fade2Color2 = parseInt("0x" + args.Brightness);
		strip.SetBrightness(Brightness);
		strip.SetStripColor(CurrentFadeColor);
		this.FadeTick(strip);
	};
}

module.exports = new solid();
