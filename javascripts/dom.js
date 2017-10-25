"use strict"; 

const outputDiv = $('#explosives');

const boomString = (explosive) => {
	let newBoom = '';
	 	newBoom += `<div>`;
	 	newBoom += `<h1>${explosive.name}</h1>`;
	 	newBoom += `<img src= "${explosive.url}">`;
	 	newBoom += `</div>`;
	 printToDom(newBoom);
};

const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = boomString;


