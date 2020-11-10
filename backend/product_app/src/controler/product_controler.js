const Product = require('../models/Product');


class ProductController {

    static async getProductById(req, res) {
        //logic to get a product
        // return a product object
        return Product(...req)
    }

    static async saveProduct(req, res) {
        //logic to save in the corresponding DB
        // return db id
        return
    }

    static async getAll(req, res) {
        //logic to get all product
        // return a list of product objects
        return list
	}

	static async deleteById(req, res) {
	}

	static async updateById(req, res) {
        //logic to update a product
        // return a product object
    }
}

module.exports = ProductController;