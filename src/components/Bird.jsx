import React from 'react';
import { connect } from 'react-redux';
import BirdCard from './BirdCard';
import BirdDescription from './BirdDescription';
import { URL_PHOTO_API } from '../common/constants';

const getDataFromApi = async (url) => {
  try {    
    const res = await fetch(url);
    const data = (res.ok) ? await res.json() : 'connection error';

    return data;
  } catch (err) {
    return 'connection error';
  }
}

class Bird extends React.Component {
  
  constructor() {    
    super();
    this.state = {
      url: null
    }
  }

  async componentDidMount() {
    const response= await getDataFromApi(`${URL_PHOTO_API}Черный ворон`);
    this.setState({url: response.photos.photo[0].url_m});
  }

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