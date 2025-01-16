/* import { configureStore } from '@reduxjs/toolkit';

import birdsReducer from './slices/birdSlice';

const store = configureStore({
  reducer: {
    birds: birdsReducer
  }
})

export default store; */

import { configureStore } from '@reduxjs/toolkit';
import birdsReducer from './slices/birdSlice';

const store = configureStore({
  reducer: {
    birds: birdsReducer
  }
})

export default store;