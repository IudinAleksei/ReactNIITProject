import { useEffect } from 'react';
import { connect } from "react-redux";
import { changeBird, changeGroup } from '../redux/actions';



function BirdNav(props) { 

  useEffect(() => {
    props.changeGroup(props.match.params.group);    
  });

  let act = 1;

  return (
    <ul className="nav nav-fill nav-tabs"> 
    {props.birds.map((bird => {
      let classes = 'nav-link fs18';
      if (act === bird.id) {
        
        classes += ' active text-dark';
      } else {
        classes += ' text-info';
      }
      return (
          <li className="nav-item" key={bird.id}>
            <a 
              className={classes} 
              href="/#" 
              onClick={(event => {
                event.preventDefault();
                props.changeBird(bird.id - 1);
                console.log(act);
                act = bird.id;
                console.log(act);
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