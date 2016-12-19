# Sails-API

This API has been set up for the purpose of demonstrating how to set up a simple API with Authentication. For the purpose of this API, it will be assumed that there is no front end application directly attached to this Repository. Instead all API requests will be done from other applications using JWT for authentication.

After creating various API's for various applications, each time I have been forced to apply authentication a little differently with different work arounds. Slowly I began to figure out a more standard way of applying Authentication to using the power of SailsJs. In this tutorial we will be start completely from scratch allowing us to create a strong and clean baseline when developing any API.

## 1. Initial Setup

1. First we will need to set up the initial Sails Application. Fortunately Sails makes this very simple by running the following command:
 - `sudo npm -g install sails` -- if you do not have SailsJs installed yet
 - `sails new Sails-API` -- Feel free to name your project what ever you wish.

2. Generate our Auth Models, Controllers, Policies, and Services.
Once again Sails along with Sails-Generate-Auth, will make this very simple
 - `npm install sails-generate-auth` -- Install the Generator
 - `sails generate auth`
 - This will generat the following:
   - controllers
     - AuthController
   - models
   - services


```
api
  - controllers
        - AuthController
  - models
        - Passport.js
        - User.js
  - policies
        - bearerAuth.js
        - passport.js
        - sessionAuth.js
  - services
        - passport.js
        - protocals
             - bearer.js
             - cas.js
             - index.js
             - oauth.js
             - oauth2.js
             - openid.js
config
  - passport.js
views (Will not be used)
  - auth
        - login.ejs
        - register.ejs
```

At this point our we have the basic structure for authentication but we still do not have a functional application



