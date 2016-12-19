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
 - Let's not forget to install the following dependencies
    - `npm install passport --save`
    - `npm install bcryptjs --save`
    - `npm install validator --save`



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

At this point our we have the basic structure for authentication but we still do not have a functional application. We will be customizing quite a bit in the next few steps. Here are a few items to keep in mind:

- A User and Passport model was generated. All user passwords will be stored in the Passport model and will be tied to a specific user.
- At this point no database has been set up for storing any of our models. In this tutorial we will be using MongoDb but SailsJs has built in functionality to use MySQL and PostgreSQL.
- We will set up routes to handle Registration and Login using the newly created auth controller
- For now we will be setting up Passport Local only.
- We will not be using sessionAuth for this API as we have no front end views that we will be implementing

## 2. Load Passport, Setup Routes, and Add Policies
- We must Load Passport into our Sails App. To do this, add the following line of code to `config/bootstrap.js`
```
sails.services.passport.loadStrategies();
```
- We will be using PassportLocal and no views therefore we will only add the following routes into our `config/routes.js` file.
```
'post /auth/local': 'AuthController.callback',
'post /auth/local/:action': 'AuthController.callback',
```
- Comment out or remove the existing route which was set up by Sails
```
'/': {
   view: 'homepage'
 }
```
- Policies will be our main point of access for restricting access to specific pages and requiring authentication. Add the following lines of code to `config/policies.js`
```
' * ': ['passport'],
'auth': {
   '*': ['passport']
}
```
- For educational purposes, we will slowly be adding to this file as needed.



