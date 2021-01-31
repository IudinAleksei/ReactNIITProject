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
    console.log('render');
    return (
      <div className="row">
        <div className="col">
          <BirdCard url={this.state.url} />
        </div>
        <div className="col">
          <BirdDescription title="Ворон" text="Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет."/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    state
  }
}

export default connect(mapStateToProps, null)(Bird);