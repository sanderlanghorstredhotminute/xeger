/**
 * Xeger
 * Input handler
 */

/// Imports

import Parser from '../components/Parser.js';
import {Size, Diversity} from '../Enums.js';


/// Constants
const
	moduleName = 'xeger',
	selectors = {
		base: `.js-${moduleName}`,
		button: `.js-${moduleName}-generate`,
		diversity: `.js-${moduleName}-diversity`,
		regex: `.js-${moduleName}-regex`,
		result: `.js-${moduleName}-result`,
		size: `.js-${moduleName}-size`
	};

/// Privates
let
	baseElement = null;

	
/**
 * @returns {Symbol} The selected diversity
 */
function getDiversityOption(){
	const
		diversity = baseElement.querySelector(selectors.diversity),
		diversityValue = diversity == null ? 0 : diversity.value;
	switch(diversityValue){
		case '1':
			return Diversity.Simple;
		case '2':
			return Diversity.Random;
		case '3':
			return Diversity.Insane;
	}
	return Diversity.Simple;
}
	
/**
 * @returns {Symbol} Size
 */
function getSizeOption(){
	const
		size = baseElement.querySelector(selectors.size),
		sizeValue = size == null ? 0 : size.value;
	switch(sizeValue){
		case '1':
			return Size.Small;
		case '2':
			return Size.Medium;
		case '3':
			return Size.Large;
		case '4':
			return Size.Insane;
	}
	return Size.Small;
}

/**
 * initializes the listeners
 * @param {HtmlElement} element the xeger element
 */
function initXeger(element){
	baseElement = element;

	const 
		button = baseElement.querySelector(selectors.button),
		regex = baseElement.querySelector(selectors.regex);
	if(button === null)
		return;

	button.addEventListener('click', onGenerateClicked);
	regex.addEventListener('input', onRegexInputed);
}

/**
 * exported init
 * @param {Array<HTMLElement>} elements the selected elements
 */
function init(elements = document.querySelectorAll(selectors.base)) {
	if(elements === null || elements === undefined || elements.length == 0)
		return;
	
	initXeger(elements[0]);
}

/**
 * renders the result on the page
 * @param {Array<String>} possibilities the result
 */
function setResult(possibilities){
	const
		resultElement = baseElement.querySelector(selectors.result),
		ul = document.createElement('ul');
	resultElement.innerHTML = '';

	possibilities.forEach(p => {
		const
			element = document.createElement('li');
		element.innerText = p;
		ul.append(element);
	});
	resultElement.append(ul);
}

/**
 * Validates the input and sets validity properties
 * @param {HtmlInputElement} regex the regex input
 */
function validateInput(regex){
	try{
		if(regex === null || regex === undefined || regex.value === '')
			throw 'Input is empty, infinite matches!';
		
		new RegExp(regex.value);
		regex.setCustomValidity('');
		return true;
	}
	catch(e){
		regex.setCustomValidity(`${e}`);
		return false;
	}
	finally{
		regex.form.reportValidity();
	}
}

/// Events

/**
 * handles the generate button click
 * @param {MouseEvent} event the mouse event
 */
function onGenerateClicked(event){
	const
		regex = baseElement.querySelector(selectors.regex);
	
	if(!validateInput(regex)){
		return;
	}

	const
		sizeOption = getSizeOption(),
		diversityOption = getDiversityOption(),
		parser = new Parser(regex),
		parsedComponent = parser.Parse(),
		possibilities = parsedComponent.GetSelection(sizeOption, diversityOption);
	
	console.log(possibilities);

	setResult(possibilities);
}

/**
 * handles the input on the regex field
 * @param {InputEvent} event the input event
 */
function onRegexInputed(event){
	if(!validateInput(event.target)){
		return;
	}
}

/// Export

export {
	init
};