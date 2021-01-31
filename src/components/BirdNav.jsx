import { connect } from "react-redux";

function BirdNav({birds}) {  
  console.log(birds)
  return (
    <ul className="nav nav-pills nav-fill"> 
    {birds.map((bird => {
      return (
          <li className="nav-item" key={bird.id}>
            <a className="nav-link" href="/sea">{bird.name}</a>
          </li>
        )        
        })
      )}
      </ul>   
  );
}

const mapStateToProps = state => {
  return {
    birds: state.nav.birdData[1]
  }
}

export default connect(mapStateToProps)(BirdNav);