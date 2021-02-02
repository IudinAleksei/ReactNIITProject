import { useEffect } from 'react';
import { connect } from "react-redux";
import { changeBird, changeGroup, hideImage } from '../redux/actions';



function BirdNav(props) { 

  useEffect(() => {
    props.hideImage();
    props.changeGroup(props.match.params.group);    
  });

  return (
    <ul className="nav nav-fill nav-tabs"> 
    {props.birds.map((bird => {
      let classes = 'nav-link fs18  text-info';      
      return (
          <li className="nav-item" key={bird.id}>
            <a 
              className={classes} 
              href="/#" 
              onClick={(event => {
                event.preventDefault();
                props.changeBird(bird.id - 1);
                props.hideImage();                
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
  changeBird,
  hideImage
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdNav);