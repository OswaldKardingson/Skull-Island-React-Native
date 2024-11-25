import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // Import DevTools extension
import thunk from 'redux-thunk'; // Middleware for async actions
import rootReducer from '../reducers'; // Path to your root reducer

// Create the Redux store
const store = createStore(
  rootReducer, // Your combined reducers
  composeWithDevTools(applyMiddleware(thunk)) // Apply middleware and integrate DevTools
);

export default store;
