import { connect } from 'react-redux';
import { changeBirds } from '../redux/actions';

function NavHOC (props) {  
  props.changeBirds(props.match.params.group);
  return null 
}

const mapDispatchToProps = {
  changeBirds
}

export default connect(null, mapDispatchToProps)(NavHOC)
