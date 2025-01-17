import { createSlice } from '@reduxjs/toolkit'
import { birdSpecies } from '../data/birdsArray'

const birdSlice = createSlice({
  name: 'birds',
  initialState: [{
    name: 'robin',
    views: 1
  }],
  reducers: {
    incrementView: (state, action) => {
      const bird = state.find(bird => bird.name === action.payload.name);

      if (bird) {
        bird.views += 1;
      }
    }, 
    decrementView: (state, action) => {
      const bird = state.find(bird => bird.name === action.payload.name)

      if (bird && bird.views > 0) {
        bird.views -= 1;
      }
    },
    addBird: (state, action) => {
      let birdBool = false;
      let arrayBird = '';
      for (const bird of birdSpecies) {
        if (bird.toLowerCase() === action.payload.name.toLowerCase()) {
          birdBool = true;
          arrayBird = bird;
        }
      }

      if (birdBool) {
        action.payload.name = arrayBird;
        state.push(action.payload)
      } else {
        return state
      }
    } 
  }
})

export const { incrementView, decrementView, addBird } = birdSlice.actions;

export default birdSlice.reducer;