import { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotoURL } from '../redux/actions';


const BirdDescription = (props) => {

  useEffect(() => {
    props.getPhotoURL(props.bird.species);    
  }, [props.bird.species]);
  
  return (
    <div className="bird-description">
      <div className="image-container">
        <img 
          key={props.bird.species}
          src={props.birdUrl} 
          // onLoad={((event) => event.target.parentNode.classList.remove('invisible'))}
          className="card-img-top img-thumbnail"  
          alt={props.bird.species}/>
          <div className="spinner-border text-info centered" role="status">
            <span className="sr-only">Loading...</span>
          </div> 
      </div>
           
      <h3 className="text-center mt-3">{props.bird.name}</h3>
      <h4 className="text-center mt-1">({props.bird.species})</h4>
      <p className="fs18">{props.bird.description}</p>
     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    birdUrl: state.app.birdUrl,
    bird: state.nav.bird    
  }
}

const mapDispatchToProps = {
  getPhotoURL
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdDescription);
