"use strict"; 

const outputDiv = $('#explosives');

const domString = (explosive) => {
	let domStrang = '';
	 	domStrang += `<div>`;
	 	domStrang += `<h1>${explosive.type}</h1>`;
	 	domStrang += `</div>`;
	 printToDom(domStrang);
};

const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;
