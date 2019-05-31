/**
 * TestUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getDate: function(req, res) {
    var sql = 'select * from base_message';
    // eslint-disable-next-line camelcase
    sails.sendNativeQuery(sql, (err,data) => {
      if (err) {
        console.log(req);
      } else {
        res.send(200, {
          success: false,
          msg: data
        });
      }
    });
  }
};
