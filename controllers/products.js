const productModel = require("../models/products");
const _ = require("lodash"); // library
const Joi = require('joi')
//import {get} from "lodash"

const createProduct = function (req, res, next) {
  if (isNaN(_.get(req, "body.price"))) {
    return res.status(413).send({ err: "price should be a number" });
  }

  

  const product = new productModel(req.body);
  //product.title = req.body.title;
  //product.image = req.body.image;
  product.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
  //return res.send({success: true, body: req.body, product: product});
};

const updateProduct = function (req, res, next) {
  // res.send(req.params);
  //const id = req.params.id;
  //const id = req?.abcd?.id
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  productModel.findByIdAndUpdate(id, body, function (err, data) {
    //return res.send("I am from products controller-abcd")
    if (err) {
      res.status(404).send(err);
    }

    return res.send(data);
  });
};

const deleteProduct = function (req, res, next) {
    // res.send(req.params);
    //const id = req.params.id;
    //const id = req?.abcd?.id
    const id = _.get(req, "params.id", null);
    productModel.findByIdAndDelete(id, function (err, data) {
    
      //return res.send("I am from products controller-abcd")
      if (err) {
        res.status(404).send(err);
      }
  
      return res.send(data);
    });
  };
const getProducts = function (req, res, next) {
  productModel.find(function (err, data) {
    //return res.send("I am from products controller-abcd")
    return res.send(data);
  });
};
const getProduct = function (req, res, next) {
  // res.send(req.params);
  //const id = req.params.id;
  //const id = req?.abcd?.id
  const id = _.get(req, "params.id", null);
  productModel.findById(id, function (err, data) {
    //return res.send("I am from products controller-abcd")
    if (err) {
      res.status(404).send(err);
    }

    return res.send(data);
  });
};
module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct};
