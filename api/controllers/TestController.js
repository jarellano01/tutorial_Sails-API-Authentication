/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getUser: function (req, res) {
    return res.json(req.user);
  },
  unAuthenticated: function (req, res) {
    return res.send("This controller action does not require authentication")
  }

};


