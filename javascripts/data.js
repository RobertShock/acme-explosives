"use strict";

const dom = require('./dom');

let categories = [];
let types = [];
let products = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories);
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
	categoriesJSON().then((results) => {
		results.forEach((explosive) => {
			categories.push(explosive);
		});
		return typesJSON();
	}).then((results2) => {
		results2.forEach((explosive) => {
			types.push(explosive);
		});
		return productsJSON();
	}).then((results3) => {
		results3.forEach((explosive) => {
			products.push(explosive);
		});
		console.log('arrays of products', products);
	}).catch((error) => {
		console.log('error', error);
	});
};

// const makeExplosives = () => {
// 	explosives.forEach((explosive) => {
// 		dom(explosive);
// 	});
// };

const initializer = () => {
	explosiveGetter();	
};

// const getExplosives = () => {
// 	return explosives;
// };

module.exports = {initializer: initializer, explosiveGetter: explosiveGetter};