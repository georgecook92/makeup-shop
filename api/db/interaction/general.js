var pool = require('../connect.js');

export function standardUpdateQuery(SQL, data, next, res) {
  pool.getConnection().then(connection => {
    connection.query(SQL, data).then(result => {
      try {
        if (result.affectedRows > 0) {
          if (result.changedRows > 0) {
            connection.connection.release();
            res.json({success: true});
          } else { // no changed quantity etc
            throw new Error('No Change');
          }
        } else { // wrong id!
          throw new Error('ID Not Found');
        }
      } catch (e) {
        console.log(e);
        next(e);
      }
    });
  })
  .catch(err => {
    console.log(err);
    next(err);
  });
}
