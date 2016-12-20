AuthController = {
  callback: function (req, res) {
    passport.callback(req, res, function (err, user, challenges, statuses) {
      var message = req.flash();
      if (err || !user) {
        return res.json({authenticated: false, user: user, message: message});
      }

      req.login(user, function (err) {
        if (err) {
          return res.json({authenticated: false, user: user, message: message});
        }

        res.json({authenticated: true, message: message, token: jwToken.issue({user: user})});
      });
    });
  },

};

module.exports = AuthController;
