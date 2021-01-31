import { connect } from "react-redux";


function BirdNav({birds}) { 
  return (
    <ul className="nav nav-pills nav-fill"> 
    {birds.map((bird => {
      return (
          <li className="nav-item" key={bird.id}>
            <a 
              className="nav-link" 
              href="/#" 
              onClick={(event => {
                event.preventDefault();
              })}
            >{bird.name}</a>
          </li>
        )        
        })
      )}
      </ul>   
  );
}

const mapStateToProps = state => {
  return {
    birds: state.nav.birds
  }
}

export default connect(mapStateToProps)(BirdNav);