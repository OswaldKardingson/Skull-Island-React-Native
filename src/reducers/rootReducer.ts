// Define the initial state structure
export interface RootState {
  // Add specific properties for your application's global state
  [key: string]: any; // Flexible for dynamic keys (optional)
}

// Initial state
const initialState: RootState = {};

// Define the action interface
export interface RootAction {
  type: string;
  payload?: any; // Optional payload to carry action data
}

// Root reducer function
export default function rootReducer(
  state: RootState = initialState,
  action: RootAction
): RootState {
  switch (action.type) {
    // Add specific cases for actions here
    default:
      return state;
  }
}
