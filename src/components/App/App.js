import BirdMap from "../BirdMap/BirdMap";
import { GitRepositoryHeader, Footer } from '../common/';

function App() {
  return (
    <div className='app-wrapper'>
      <GitRepositoryHeader/>
      <section className="bird-selection-section">
       <BirdMap/>
       <div className="image-container">
        <img src="https://www.allaboutbirds.org/news/wp-content/uploads/2024/02/AmericanRobin_ABuckley_banner.jpg"/>
       </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App;