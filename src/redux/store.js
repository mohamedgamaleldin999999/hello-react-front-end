import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './greetings/greetings';

export default configureStore({
  reducer: {
    root: rootReducer,
  },
});
