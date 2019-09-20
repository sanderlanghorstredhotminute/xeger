import {SelectorBase} from '/src/model/SelectorBase.js';

export class Generator {
	/**
	 * creates a generator instance based on the model
	 * @param {SelectorBase} model 
	 */
	constructor(model){
		this._model = model;
	}
}