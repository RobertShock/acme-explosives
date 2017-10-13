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