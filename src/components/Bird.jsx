import React from 'react';
import { connect } from 'react-redux';
import BirdCard from './BirdCard';
import BirdDescription from './BirdDescription';

class Bird extends React.Component {    

  render() {
    return (
      <div className="row">
        <div className="col">
          <BirdCard image={this.props.bird.image} audio={this.props.bird.audio} />
        </div>
        <div className="col">
          <BirdDescription title={this.props.bird.name} latin={this.props.bird.species} text={this.props.bird.description}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {  
  return { bird: state.nav.bird }
}

export default connect(mapStateToProps, null)(Bird);