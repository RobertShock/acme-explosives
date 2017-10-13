(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require('./dom');

const explosives = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories1);
		}).fail((error1) => {
			reject(error1);
		});
	});	
};

const typesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/types.json').done((data2) => {
			resolve(data2.types);
		}).fail((error2) => {
			reject(error2);
		});
	});	
};

const productsJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/products.json').done((data3) => {
			resolve(data3.products);
		}).fail((error3) => {
			reject(error3);
		});
	});	
};

const explosiveGetter = () => {
	Promise.all([categoriesJSON(), typesJSON(), productsJSON()]).then((results) => {
		console.log("results from promise.all", results);
		results.forEach((result) => {
			result.forEach((explosive) => {
				console.log("explosive", explosive);
				explosives.push(explosive);
			});
		});
		makeExplosives();
	}).catch((error) => {
		console.log("error from promise.all", error);
	});
};

const makeExplosives = () => {
	explosives.forEach((explosive) => {
		dom(explosive);
	});
};

const initializer = () => {
	explosiveGetter();	
};

const getExplosives = () => {
	return explosives;
};

module.exports = {initializer:initializer, getExplosives:getExplosives};
},{"./dom":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";


const data = require('./data');

$(document).ready(() => {
	data.initializer();
});
},{"./data":1}]},{},[3]);
