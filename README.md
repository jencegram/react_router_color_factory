# React Router Color Factory

This project is an exercise in using React Router to create a simple web application called "Color Factory" that allows users to view a list of colors and add new ones to the collection.

## User Stories

The application is built around several key user stories:

- **View Colors**: As a user, I can go to `/colors` to see a list of all available colors.
- **Color Details**: As a user, I can click on a color in my colors list to see the color fill the page (`/colors/:color`).
- **Add New Color**: As a user, I can click a button to display a form that lets me add a new color (`/colors/new`).
- **Submit New Color**: As a user, when I submit the new color form, I am redirected to the colors index, where my new color appears at the top.
- **Invalid Color Navigation**: As a user, if I navigate to a color page that does not exist, I am redirected to the colors index page.
- **Invalid URL Navigation**: As a user, if I try to navigate to an invalid URL, I am redirected to the colors index page.

## Implementation

The application leverages the React Router for navigating between the different views:

- The main list of colors is a homepage that displays all the colors.
- Each color's detail view is implemented as a dynamic route in React Router.
- The form to add a new color is also a separate route.

I've structured the project with separate components for each part of the application, keeping the code organized and maintainable.

## Running the Project

To run this project on your local machine, clone the repository and run `npm install` to install all the necessary dependencies. After installation, you can start the application with `npm start`.

## Technologies Used

- React.js
- React Router
- CSS

## Reflection

This exercise was an excellent opportunity to understand the workings of React Router and its importance in building single-page applications (SPAs). It was particularly enlightening to see how dynamic routing is handled and how user input can be captured and utilized to manipulate the app's state.

Thank you for checking out my Color Factory project!
