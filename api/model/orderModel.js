var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

export default class OrderModel {
  constructor(data, next, token, sql) {
    this.sql = sql;
    this.data = data;
    this.next = next;
    this.token = token;
  };

  async addOrder() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [this.data.order_id, decoded.user_id, this.data.payment_id, this.data.price ]);
      connection.connection.release();
      return result;
    } catch(e) {
      console.log(e);
    }
  }

}
