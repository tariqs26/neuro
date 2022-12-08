# Trivify

## Description:

- Trivia app that allows users to generate timed quizzes based on the number of questions, category, and difficulty.
- Includes a timer , progress bar, and a leave button which opens a modal to confirm exiting the quiz.
- Built using **React** and **Typescript**.
- Utilizes **React Router** to navigate between the different pages and dynamic routes.
- Uses **Axios** to fetch data from the **Open Trivia Database API** to generate the questions.
- Uses **Redux Toolkit** to manage the state of the quiz, form, and timer.

## Future Improvements:

- Use **React Query** to fetch data from the API.
- Feature to save previous quizzes in local storage so that they can be accessed later.
- Flashing animation when timer is about to end.

## Installation:

### `npm install`

Installs all the dependencies needed to run the app.

## Available Scripts

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

<!-- CI = npm run build -->

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Previews the production build of the app.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.
