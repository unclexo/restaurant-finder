# Restaurant Finder App
A simple **restaurant finder** app which is built on top of Vue.js, Zomato API and Google's Maps Javascript API. This is a Single Page Application. So you would get all the features in one place.

## Features
* Search by name
* Search by cuisine
* Infinite restaurants loading
* Listing restaurants on Google Map
* Listing restaurants on the sidebar
* Well-designed info window on-click-event 

### Installation
Assumed you've already cloned this repo. Run the following command.
```
yarn install
```

### Setting up keys
As this app depends on Zomato API and Google's Map API, you need to setup those keys. Set those keys using your command line tool. 
```
export VUE_APP_ZOMATAO_KEY='zomato-api-key'
export VUE_APP_GOOGLE_MAP_KEY='google-map-api-key'
```

### Running APP
To make the google map work, you have to put the domain name with port (that you put on the google to get the map api key) as the following:
```
yarn serve --host 'your-host' --port 'your-port'
```

### Compiles and minifies for production
```
yarn build
```

### TODO
* Testing the app

### Any Issue
If you have any issue, I would suggest you to make an issue here.