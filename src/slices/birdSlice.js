/* import { createSlice } from '@reduxjs/toolkit';

const birdSlice = createSlice({
  name: 'birds',
  initialState: [{
    name: 'robin',
    views: 1
  }],
  reducers: {
    incrementView: (state, action) => {
      const bird = state.find(b => b.name === action.payload.name);
      if (bird) {
        bird.views += 1
      }
    },
    decrementView: (state, action) => {
      const bird = state.find(b => b.name === action.payload);
      if (bird && bird?.views > 1) {
        bird.views -= 1
      }
    }
  }
})

export const { incrementView, decrementView } = birdSlice.actions;

export default birdSlice.reducer;

 */

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
        if (bird.toLowerCase().includes(' ')) {
          const birdArray = bird.split(' ');
          if (action.payload.name.toLowerCase() === birdArray[1].toLowerCase()) {
            birdBool = true;
            arrayBird = bird;
            break;
          }    
        } else if (action.payload.name.toLowerCase() === bird.toLowerCase()) {
          birdBool = true;
          arrayBird = bird;
          break;
        }
      }
/*       if (!birdBool) return 'Bird is Not included'; */
      console.log(action)

      if (birdBool) {
        action.payload.name = arrayBird;
        state.push(action.payload)
      } else {
        return 'hello'
      }
    } 
  }
})

export const { incrementView, decrementView, addBird } = birdSlice.actions;

export default birdSlice.reducer;