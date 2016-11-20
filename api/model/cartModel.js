var pool = require('../db/connect.js');
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
    //console.log("RESULT Model", result);
    return result;
  }

  createCart() {
    const result = Queries.standardInsertQuery(this.sql,[], this.next, this.token);
    return result;
  }


}
