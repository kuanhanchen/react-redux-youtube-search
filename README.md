# Youtube Search

React-Redux Youtube Search

![demo](https://github.com/kuanhanchen/react-redux-youtube-search/blob/main/youtube_search_demo.gif)
## Features

- Implement the functionality of Search using `React`, `Redux`, and `Hooks`.
  - Show 10 videos per page and limit 3 pages at the beginning.
  - Once the current page is on the last page, the 3rd page for example, have the next page (4th page) button in the pagination if there are more videos available.
  - You would need to replace API_KEY in src/components/utilities/helper.js.
- Persist the redux state by `redux-persist` after a refresh.
- Have the responsive layout by `flexbox`.
- Build pagination by `SCSS`.
- Test React components using `React Testing Library`.
- Test action creators and reducers using `Jest`.
- Have style in `SCSS`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
