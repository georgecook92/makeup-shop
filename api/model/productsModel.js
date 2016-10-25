var pool = require('../db/connect.js');
import * as Queries from '../db/interaction/general.js';

export default class ProductsModel {
  constructor(data, res, next, sql = '') {
    this.sql = sql;
    this.data = data;
    this.res = res;
    this.next = next;
  }

  getAllByCat() {
    pool.getConnection().then(connection => {
      connection.query(this.sql, [this.data.categoryId]).then(result => {
        try {
          if (result.length > 0) {
            this.res.json(result);
          } else {
            throw new Error('ID Not Found');
          }
        } catch (e) {
          console.log(e);
          this.next(e);
        }
      });
    })
    .catch(err => {
      console.log(err);
      this.next(err);
    });
  }

  getProduct() {
    pool.getConnection().then(connection => {
      connection.query(this.sql, [this.data.productId]).then(result => {
        try {
          if (result.length > 0) {
            this.res.json(result);
          } else {
            throw new Error('ID Not Found');
          }
        } catch (e) {
          console.log(e);
          this.next(e);
        }
      });
    })
    .catch(err => {
      console.log(err);
      this.next(err);
    });
  }
  // ADMIN PANEL STUFF

  changeProductQuantity() {
    Queries.standardUpdateQuery(this.sql, [this.data.quantity, this.data.productId], this.next, this.res);
  }

  changeDiscount() {
    Queries.standardUpdateQuery(this.sql, [this.data.discount, this.data.productId], this.next, this.res);
  }

}
