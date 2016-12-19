/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `TestController.getUser()`
   */
  getUser: function (req, res) {
    return res.json({
      todo: req.user
    });
  }
};

