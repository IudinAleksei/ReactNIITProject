import React from 'react';
import { connect } from 'react-redux';
import BirdCard from './BirdCard';
import BirdDescription from './BirdDescription';

class Bird extends React.Component {    

  render() {
    return (
      <div className="row">
        <div className="col">
          <BirdCard image={this.props.bird.image} audio={this.props.bird.audio} title={this.props.bird.name} />
        </div>
        <div className="col">
          <BirdDescription />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {  
  return { bird: state.nav.bird }
}

export default connect(mapStateToProps, null)(Bird);