# React App: Kyoto Explore Neighborhood Map

## Project Information

### About

This project is a ReactJS single-page application that utilizes the Google Maps API and the Foursquare API to allow the user to explore popular sights in Kyoto, Japan and also receive additional information about nearby locations. This was my final project for my Front-End Developer Nanodegree from Udacity.

### Motivation

I have always been very interested in Japanese culture and after having gone there for the first time, I decided to center this project around some of the locations I visited and other locations where I would love to explore in the future. All of these locations are in the city of Kyoto within the Kyoto prefecture in Japan.

### Concepts

Include information about the concepts, technologies, packages, and frameworks used to develop the project

- ReactJS was used to develop the responsive UI and to manage the list of locations in Kyoto
- The Google Maps API was used to display a map, markers, and InfoWindows for the set locations
- The FourSquare API was used to retrieve nearby information for each location
- npm was used to install all dependencies and modules needed for the project

## User Interface

Kyoto Explore utilizes a responsive UI that is optimized for mobile, tablet, and desktop screen sizes. The red color scheme provides a nice contrast to both dark and light elements and text within the app. The list view is scrollable, searchable, and filterable to allow users to filter results to specific queries. Finally, focus on list items and other elements in the application are present to allow for accessibility usage.

![](https://github.com/raicalvin/pictures/blob/master/pix-fend-p8-neighborhood-map-react-app/pic1.png) ![](https://github.com/raicalvin/pictures/blob/master/pix-fend-p8-neighborhood-map-react-app/pic2.png)

## Getting Started

This section provides information about installing and running the Kyoto Explore application to local hosts.

### Downloading

You may download the project files from the repository using the following git command:

```
git clone "https://github.com/raicalvin/fend-p8-neighborhood-map-react-app.git"
```

### Running

You may run the application on a localHost by CD-ing into the directory, installing the dependencies, and then running the application using the following commands:

```
npm install
npm start
```

The application should begin running automatically on localHost:3000. If the application does not open, open a blank browser tab and navigate to localHost:3000.

## Issues

- Issue 1 - Since this project is utilizing the free Google Maps API service, quota requests are limited and may not display detailed information or present other functionality.

- Issue 2 - The Foursquare API is limited to 99,500 requests per day and will not fetch new data if this quota is reached. The quota is reset every 24 hours.

## Built With

- [ReactJS](https://reactjs.org/) - Framework used to develop the UI
- [Google Maps API](https://cloud.google.com/maps-platform/) - API used to provide the map, markers, and information windows
- [Foursquare API](https://developer.foursquare.com/) - API used to retrieve local information for each location

## Authors

- Calvin S Rai - _Designer & Developer_ - [GitHub](https://github.com/raicalvin)

## Contact

My name is Calvin! :]

Check out my other work here on [GitHub](https://github.com/raicalvin).

You can also reach me by [email](mailto:raicalvin@gmail.com)!
