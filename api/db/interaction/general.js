var pool = require('../connect.js');
var jwt = require('jsonwebtoken');
var secret = require('../../jwtSecret.js');

export async function standardInsertQuery(SQL, data, next, token) {
  try {
    var decoded = jwt.verify(token, secret);
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, decoded.user_id);
    connection.connection.release();
    return result;
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function standardUpdateQuery(SQL, data, next, token, res) {

  try {
    var decoded = jwt.verify(token, secret);
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, data);
    if (result.affectedRows > 0) { // exists
      if (result.changedRows > 0) { // changed quantity
        connection.connection.release();
        res.json({success: true});
      } else { // exists but no change
        connection.connection.release();
        throw new Error('No Change')
      }
    } else { // does not exist
      connection.connection.release();
      throw new Error('ID Not Found');
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function standardGetQueryToken(SQL, next, token) {
  try {
    var decoded = jwt.verify(token, secret);
    const connection = await pool.getConnection();
    let result = await connection.query(SQL, decoded.user_id);
    if (result.length > 0) {
      connection.connection.release();
      return {
        success: true,
        data: result
      };
    } else {
      connection.connection.release();
      return {
        success: true,
        data: []
      };
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function standardRequiredLengthGetQuery(SQL, data, next, token, res) {

  try {
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, data);
    if (result.length > 0) {
      connection.connection.release();
      res.json(result);
    } else {
      connection.connection.release();
      throw new Error('ID Not Found');
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function standardGetQuery(SQL, data, next) {

  try {
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, data);
    connection.connection.release();
    return result;
  } catch (e) {
    console.log(e);
    next(e);
  }
}
