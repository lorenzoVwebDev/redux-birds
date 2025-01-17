import { useState } from 'react';
import { useSelector, useDispatch } from  'react-redux';
import { incrementView, decrementView, addBird } from '../../slices/birdSlice';
import { changeSpared } from '../../slices/errorSlice'
import { birdSpecies } from '../../data/birdsArray';

function BirdMap() {
  const [match, setMatch ] = useState();
  const birds = useSelector((state) => state.birds);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  if (match) {
    setTimeout(() => {
      dispatch(changeSpared({spared: false}))
      setMatch()
    }, 2000)
  } 
  return (
    <div className="bird-map-container">
      <div className="bird-map-form">
        <h1>Birds{birds.length >= 5 && <h6>Max 5 Birds</h6>}</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = event.target[0].value;
          const views = parseInt(event.target[1].value, 10);
          const match = birds.find(bird => bird.name === name)

          if (match) {
            dispatch(changeSpared({spared: true}));
            setMatch(match);
            return;
          }
          dispatch(addBird({
            name,
            views 
          }))
        }} id="bird-submit-form">
          <select name="birds" form="bird-submit-form">
            <option defaultValue="Select Your Bird">Select Your Bird</option>
            {birdSpecies.map(bird => {
              return (              
                <option value={bird} key={bird}>{bird}</option>
              )
            })}
          </select>
          <input type="number" min="1" max="20" defaultValue="1" required/>
        <input type="submit" value="Add Your Bird"/>
        </form>
      </div>
      <ul className="bird-container">
        {
          birds.map((bird, index) => {
            return (
              <li key={index} className="bird">
                <span>{bird.name}: {bird.views} {(errors[0].spared && match.name === bird.name)&& <span className="bird-error">Bird's been Selected Yet!</span>}</span>
                <div className="bird-button-box">
                  <button onClick={() => dispatch(incrementView({ name: bird.name}))}>
                    Increment View
                  </button>
                  <button onClick={() => dispatch(decrementView({name: bird.name}))}>
                    Decrement View
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BirdMap;