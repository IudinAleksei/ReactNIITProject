import { useEffect } from 'react';
import { connect } from "react-redux";
import { changeBird, changeGroup } from '../redux/actions';


function BirdNav(props) { 

  useEffect(() => {
    props.changeGroup(props.match.params.group);    
  });

  return (
    <ul className="nav nav-fill nav-tabs"> 
    {props.birds.map((bird => {
      return (
          <li className="nav-item" key={bird.id}>
            <a 
              className="nav-link" 
              href="/#" 
              onClick={(event => {
                event.preventDefault();
                props.changeBird(bird.id - 1);
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

const mapDispatchToProps = {
  changeGroup,
  changeBird
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdNav);