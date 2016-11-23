// var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';

export default class CartModel {
  constructor(data, next, token = '', sql = '') {
    this.sql = sql;
    this.data = data;
    this.next = next;
    this.token = token;
  }

  async checkCartExist() {
    const result = await Queries.standardGetQueryToken(this.sql, this.next, this.token);
    console.log("RESULT Model", result);
    return result;
  }

  async createCart() {
    const result = await Queries.standardInsertQuery(this.sql, [], this.next, this.token);
    return result;
  }

  async getCart() {
    const result = await Queries.standardGetQueryToken(this.sql, this.next, this.token);
    return result;
  }

  async addToCart() {
    const result = await Queries.standardInsertQuery(this.sql, this.data, this.next, this.token);
    return result;
  }

}
