import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Header({birdGroups}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src="./logo.svg" width="120" alt="" loading="lazy" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">          

          {birdGroups.map((group, idx) => {
            return (
                <NavLink 
                  className="nav-item nav-link fs18" 
                  to={`/${group.href}`}                   
                  key={idx}
                >{group.title}</NavLink>
              )        
            })
          }
        </div>
      </div>
    </nav>    
  );
}

const mapStateToProps = state => {
  return {
    birdGroups: state.nav.birdGroups
  }
}

export default connect(mapStateToProps)(Header)