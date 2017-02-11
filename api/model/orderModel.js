var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

export default class OrderModel {
  constructor(data, next, token, sql, dataProduct, secondSql) {
    this.sql = sql;
    this.dataOrder = data;
    this.next = next;
    this.token = token;
    this.dataProduct = dataProduct;
    this.secondSql = secondSql;
  };

  // order_id, product_id, quantity

  async addOrder() {
    try {
      var decoded = jwt.verify(this.token, secret);
      const connection = await pool.getConnection();
      const orderResult = await connection.query(this.sql, {user_id: decoded.user_id, payment_id: this.dataOrder.payment_id, total_price: this.dataOrder.total_price} );
      let dataArray = [];
      this.dataProduct.forEach( (data) => {
        console.log('data', data);
        dataArray.push([ orderResult.insertId, data.product_id, data.quantity ]);
      } );

      console.log('dataArray', dataArray);
      const productResult = await connection.query(this.secondSql, [dataArray]);
      console.log('product result', productResult);
      connection.connection.release();
      // return result;
    } catch(e) {
      console.log(e);
    }
  }

}
