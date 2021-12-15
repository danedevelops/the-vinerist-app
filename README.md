# The Vinerist

The Vinerist app is deployed on an AWS EC2 instance and can be visited [here](http://54.189.178.229).

> The app was designed for mobile-first and is best viewed @ 375 x 667px or 375 x 812px.  Responsive styling will come if time allows.  The Google Maps API key may be deprecated at time of viewing.



## Overview

The Vinerist is a React application that aims to be a social database for vintage and winery reviews in the Naramata region.  This app was built as my capstone project for the BrainStation program over a two week period.  The application itself is built with:

* React
* Node
* MySQL
* Prisma


## Inspiration

I was looking for a project idea to practice CRUD functionality, and remembered a recent stay at a friend's B&B in Naramata wine country.  During the stay they mentioned that despite having a thriving community, there was no central online hub that allowed visitors to connect over their experiences.  I decided to create a central repository where users could upload reviews of vintages and wineries and connect over their shared interest.  Beyond the standard CRUD functionality I figured it would also allow me to experiment with a number of third-party features, everything from drag and drop image uploading, to interacting with Google Map's API for location info.  Also, wineries are beautiful, and from a design-level I knew it would be enjoyable to build and try to capture that aesthetic.


## Functionality

With the short timeline given to complete this work, I focused on the core pieces of functionality and implemented the following features:


### Users are able to...

* Add new wineries with detailed information to the database
* Add new vintages associated with specific wineries
* Review wineries by ID
* Review vintages by ID
* Upload images of vintages and wineries and avatars


## The Vinerist 2.0

After the initial submission of our projects we had an additional week before presentation.  During this time I decided to challenge myself and see if I could quickly iterate another version.

I focused on adding authentication and integrating Google Map's API for location features.  The latest codebase reflects these changes


## UI/UX Images

![3](https://user-images.githubusercontent.com/71992181/125136925-8da9f300-e0c0-11eb-9d72-37212f8ede7a.png)![2](https://user-images.githubusercontent.com/71992181/125136921-8c78c600-e0c0-11eb-866e-a1be352d8b11.png)![12](https://user-images.githubusercontent.com/71992181/125137601-e0d07580-e0c1-11eb-96dd-96b16b711b77.png)![4](https://user-images.githubusercontent.com/71992181/125136931-8f73b680-e0c0-11eb-8b67-518479241d0c.png)

