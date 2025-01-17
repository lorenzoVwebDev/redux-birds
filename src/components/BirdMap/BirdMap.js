import { useSelector, useDispatch } from  'react-redux';
import { incrementView, decrementView, addBird } from '../../slices/birdSlice';
import { birdSpecies } from '../../data/birdsArray';

function BirdMap() {
  const birds = useSelector((state) => state.birds)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Birds</h1>
      <ul>
        {
          birds.map((bird, index) => {
            return (
              <li key={index}>
                {bird.name}: {bird.views}
                <button onClick={() => dispatch(incrementView({ name: bird.name}))}>
                  Increment View
                </button>
                <button onClick={() => dispatch(decrementView({name: bird.name}))}>
                  Decrement View
                </button>
              </li>
            )
          })
        }
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault()
        const name = event.target[0].value;
        const views = parseInt(event.target[1].value, 10);
        
        dispatch(addBird({
          name,
          views 
        }))
      }} id="bird-submit-form">
{/*         <input type="text" minLength={2} maxLength={20} placeholder="Insert New Bird" pattern="[A-Za-z]+"required/> */}
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
  )
}

export default BirdMap;