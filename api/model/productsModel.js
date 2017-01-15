var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

export default class ProductsModel {
  constructor(data, res, next, token = '', sql = '') {
    this.sql = sql;
    this.data = data;
    this.res = res;
    this.next = next;
    this.token = token;
  }

  async getAll() {
    try {
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql);
      connection.connection.release();
      return result;
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  getAllByCat() {
    Queries.standardRequiredLengthGetQuery(this.sql, [this.data.categoryId], this.next, this.token, this.res);
  }

  getProduct() {
    Queries.standardRequiredLengthGetQuery(this.sql, [this.data.productId], this.next, this.token, this.res);
  }

  // ADMIN PANEL STUFF
  changeProductQuantity() {
    Queries.standardUpdateQuery(this.sql, [this.data.quantity, this.data.productId], this.next, this.res);
  }

  changeDiscount() {
    Queries.standardUpdateQuery(this.sql, [this.data.discount, this.data.productId], this.next, this.res);
  }

  changePrice() {
    Queries.standardUpdateQuery(this.sql, [this.data.price, this.data.productId], this.next, this.res);
  }

}
