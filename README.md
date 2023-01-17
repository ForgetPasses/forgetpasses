




<!-- PROJECT LOGO -->
<br />
<div align="center">
  

  <h3 align="center">ForgetPasses</h3>

  <p align="center">
    The securest passwordless authentication system
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://forgetpasses.com/docs">View Demo</a>
    ·
    <a href="https://github.com/forgetpasses/forgetpasses/issues">Report Bug</a>
    ·
    <a href="https://forgetpasses.com">Homepage</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


There are many great authentication systems for nodejs. But forgetpasses provides a passwordless authentication system with 3D Security layers to provide the best security for your web application and your users.






### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]






<!-- GETTING STARTED -->
## Getting Started

To use forgetpasses you have to create a service account <a href="https://forgetpasses.com/sign-up/client">here</a><br></br>
After that you have to install the npm package with:

### Prerequisites


### Installation


1. Install NPM packages
   ```sh
   npm install forgetpasses
   ```
2. Get a free API Key at [https://forgetpasses.com/dashboard/settings](https://forgetpasses.com/dashboard/settings)
3. Require forgetpasses with your api key `config.js`
   ```js
   const forgetpasses = require("forgetpasses")';
   var fp = new forgetpasses("YOUR_API_KEY")';
   ```




<!-- USAGE EXAMPLES -->
## Usage
### Validate Your API-Token
   ```js
   app.get('/', async (req, res) => {
      //Returns true if token is valid, 
      //Returns false if token is invalid
      data = await fp.checkToken(req);
      res.send(data)
   });
   ```
### Generate a LoginSession
   ```js
   app.get('/generateLoginSession', async (req, res) => {
    //User gets redirected to google after succesfull logged in
    data = await fp.generateLoginSession(req,res, "https://google.com");
    //Retrieve all data
    res.send(data)
  });
   ```
### Check if User is Loggedin
   ```js
   //True or false if client is logged in
  app.get('/checkIfClientIsLoggedIn', async (req, res) => {
    data = await fp.checkStatus(req);
    res.send(data)
  });
   ```
### Get User Data
   ```js
   //True or false if client is logged in
  app.get('/getData', async (req, res) => {
    data = await fp.getUserData(req);
    res.send(data)
  });
   ```
_For more examples, please refer to the [Documentation](https://forgetpasses.com/docs)_





<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [ ] Add Additional Templates w/ Examples
- [ ] Update Service Dashboard
- [ ] Multi-language Support
    - [ ] German







<!-- LICENSE -->
## License

Distributed under the MIT License



<!-- CONTACT -->
## Contact

Your Name - [@forgetpasses](https://twitter.com/forgetpasses) - forgetpasses.auth@gmail.com

Project Link: [https://github.com/forgetpasses/forgetpasses](ttps://github.com/forgetpasses/forgetpasses)





