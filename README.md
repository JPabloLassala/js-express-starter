# Javascript-Express Starter

Just a default boilerplate for an Express application

## Project Layout

```
.
├── __test__            Testing directory
├── src                 Source files
│   ├── config           Configuration Loaders and singletons
│   ├── constants       Application constants
│   ├── controllers     Controller classes to handle HTTP requests
│   ├── helpers         Utility classes for the applications
│   ├── middlewares     Add ons for Express. E.g.: To handle all unhandled exceptions
│   ├── routes          Definition of every route for the application
│   ├── utils           Utility classes for Express and the infrastructure
│   ├── app.js          Main function to execute API methods 
│   └── server.js       Main function to execute the Express server
├── .babelrc            Config file for Babel
├── .editorconfig        Editorconfig file
├── .env                Environment variables
├── .eslintignore       Files not parsed by ESLint
├── .eslintrc.yml       ESLint configuration file
├── .gitattributes      Adjusts text configuration for git files
├── .gitignore          Files not tracked by GIT
├── .prettierignore     Files not parsed by Prettier
├── jest.config.js       Jst configuration file
├── package.json        Main project file and dependencies list
├── README.md           This README file
└── LICENSE             License file
```
