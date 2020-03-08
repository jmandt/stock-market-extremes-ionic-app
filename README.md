#### Version 0.0.1 on https://stock-market-extremes.web.app
## Stock market extremes - App 


### Table of Contents
- [Getting Started](#getting-started)
- [Firebase](#firebase)
    - [Hosting](#hosting)
    - [Functions](#functions)
- [Financial Data](#financial-data)
- [App Preview](#app-preview)


### Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/jmandt/stock-market-extremes-ionic-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* App runs on localhost:8080
* App only works if backend is set up as described in [here](#functions)    

###  Firebse
This App uses Firebase as a backend. It makes use of 
* Firestore
* Firebase Hosting and
* Firebase Functions

To set up the app yourself you have to set up three different API's 
as described in the section [below](#financial-data).

#### Hosting
* If you have not created a firebase project do so now as described in [here](https://firebase.google.com/docs/web/setup).
* Go to hosting section and enable firebase hosting
* install firebase cli `npm install -g firebase-tools` locally and login
    * `firebase login`, then
    * `firebase deploy` asks you which project you want to choose. Select your project and the app will be deployed
    
Your app has no data yet so also enable the firestore.

#### Functions
To import the data you need to deploy the the functions which can be found in this repository:

```git clone https://github.com/jmandt/stock-market-extremes-cloud-functions.git ```

Folow the README in here to set up firebase functions

### Financial Data

I made use of three different API's

* [Finnhub](finhub.io) - for basic company information and peer groups
* [WorldTradingData](https://www.worldtradingdata.com/) - for updating stock prices every 15 minutes
* [Bing News Search API](https://rapidapi.com/microsoft-azure/api/bing-news-search) for news data

Get an API key for each and paste it into the firebase functions repository.


### App Preview:
App can be found on https://stock-market-extremes.web.app
There happen to be bugs on IOS, on web and android it seems to run fine.

Thanks for reading.
