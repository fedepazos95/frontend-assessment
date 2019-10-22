![travis-url]
[![Maintainability][maintainability-shield]][maintainability-url]
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/fedepazos95/frontend-assessment/issues)
![](https://david-dm.org/fedepazos95/frontend-assessment.svg)
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/fedepazos95/frontend-assessment">
    <img src="docs/images/react.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center">React Frontend Assessment</h2>

  <p align="center">
    <a href="https://github.com/fedepazos95/frontend-assessment"><strong>Explore the docs »</strong></a>
    <br />
    <small>
      <!-- <a href="https://github.com/fedepazos95/frontend-assessment">View Demo</a>
      · -->
      <a href="http://frontend-assessment-dev.s3-website-us-east-1.amazonaws.com/">View Demo</a>
      ·
      <a href="https://github.com/fedepazos95/frontend-assessment/issues">Report Bug</a>
    </small>
  </p>
</p>


## Table of Contents
* [About the Project](#about-the-project)
* [Running the App](#running-the-app)
* [Testing](#testing)
* [Contact](#contact)
* [License](#license)


## About The Project
This is a React App that gives an easy way to
browse all the Brastlewark's inhabitants details.  
It was bootstrapped using [Create-React-App](https://github.com/facebook/create-react-app) and it's using [MaterialUI](https://material-ui.com/) as UI framework.

This project features all the latest tools and practices in the industry.

- **React 16** - React Router 5
- Redux
- _Lint_ - ES6, Airbnb Recommended config
- _Test_ - Jest

[Redux](https://redux.js.org/) is being used as a state management tool to persist the state of the app when the gnomes list is loaded, so if you enter to see the profile page of some gnome, you don't need to make a request again.

All components were made as function component because those are much easier to read and test, and they have better performance.  
New React features like Hooks are also being used.




## Running the App
To get a local copy up and running follow these simple steps.

1. Download or clone the project code
```sh
git clone https://github.com/fedepazos95/frontend-assessment.git
```
2. Install project dependencies
```sh
yarn #or npm i
```
3. Start the development server by running:
```sh
yarn dev
```

You can try the app by entering [here](http://frontend-assessment-dev.s3-website-us-east-1.amazonaws.com/)!


## Testing
No need to configure anything, just run the script :)

```sh
yarn test
```

## Contact
- [LinkedIn][linkedin-url]
- [Email][mailto]

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


[mailto]: mailto:fede.pazos95@gmail.com
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/federicopazos/
[js-logo]: docs/images/js.png
[swagger-screenshot]: docs/images/swagger.png
[travis-url]: https://travis-ci.org/fedepazos95/frontend-assessment.svg?branch=master
[maintainability-shield]: https://api.codeclimate.com/v1/badges/9299d62f7e5bdcb0288f/maintainability
[maintainability-url]: https://codeclimate.com/github/fedepazos95/frontend-assessment/maintainability
[dependencies-url]: https://david-dm.org/fedepazos95/frontend-assessment.svg
