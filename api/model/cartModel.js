var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

export default class CartModel {
  constructor(data, next, token = '', sql = '') {
    this.sql = sql;
    this.data = data;
    this.next = next;
    this.token = token;
  };

  async checkCartExist() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [decoded.user_id]);
      connection.connection.release();
      console.log("cart", result);
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async createCart() {
    const result = await Queries.standardInsertQuery(this.sql, [], this.next, this.token);
    return result;
  }

  async getCart() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [decoded.user_id]);
      connection.connection.release();
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async checkCartProduct() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [this.data.cart_id, this.data.product_id]);
      connection.connection.release();
      return result;
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async updateCartProduct() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      console.log("SQL", this.sql);
      const result = await connection.query(this.sql, [this.data.cart_id, this.data.product_id]);
      connection.connection.release();
      return result;
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async addToCart() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, this.data);
      connection.connection.release();
      return result;
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async deleteFromCart() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [this.data.cart_id, this.data.product_id]);
      connection.connection.release();
      return result;
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

}
