var pool = require('../connect.js');

export async function standardUpdateQuery(SQL, data, next, res) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, data);
    if (result.affectedRows > 0) { // exists
      if (result.changedRows > 0) { // changed quantity
        connection.connection.release();
        res.json({success: true});
      } else { // exists but no change
        throw new Error('No Change')
      }
    } else { // does not exist
      throw new Error('ID Not Found');
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function standardGetQuery(SQL, data, next, res) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(SQL, data);
    if (result.length > 0) {
      res.json(result);
    } else {
      throw new Error('ID Not Found');
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}
