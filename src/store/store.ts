import { configureStore } from '@reduxjs/toolkit'; // Use configureStore from Redux Toolkit
import rootReducer, { RootState } from '@reducers/index'; // Import your root reducer

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Combined reducers
});

// Export the store as the default export
export default store;

// Export the store's types for better TypeScript integration
export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type ReduxState = RootState; // Type for global state
