/* global define, require */
import Seriously from "../build/seriously.module";
'use strict';

Seriously.plugin('freeze', {
	draw: function (shader, model, uniforms, frameBuffer, draw) {
		if (!this.inputs.frozen) {
			draw(shader, model, uniforms, frameBuffer);
		}
	},
	requires: function () {
		return !this.inputs.frozen;
	},
	inPlace: true,
	inputs: {
		source: {
			type: 'image',
			uniform: 'source'
		},
		frozen: {
			type: 'boolean',
			defaultValue: false,
			updateSources: true
		}
	},
	title: 'Freeze',
	description: 'Freeze Frame'
});
