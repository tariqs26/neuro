# Trivify

## About the App

- This app allows you to generate a quiz based on the number of questions you want to answer, the category of the questions, and the difficulty of the questions.
- Includes a timer that counts down based on the number of questions, a progress bar, a button to view results after the timer ends and a leave button which opens a modal to confirm if you want to leave the quiz.
- Axios to fetch data from the Open Trivia Database API to generate the questions.
- Redux store to manage the state of the quiz, and modal.
- React Router to navigate between the different pages and dynamic routes.
- Responsive design for mobile and desktop, using CSS media queries, flex-box, and grid.

### Future Improvements

- Add a feature to save previous quizzes in local storage so that they can be accessed later.
- Light mode, and auto dark mode based on the user's system settings.
- flashing animation when timer is about to end.

## To Get Started

### `npm install`

Installs all the dependencies needed to run the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

<!-- CI = npm run build -->

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
