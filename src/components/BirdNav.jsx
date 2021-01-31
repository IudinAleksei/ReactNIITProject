function BirdNav(props) {
  return (
    <ul className="nav nav-pills nav-fill">      
      {props.titles.map(title => {
        return (
            <li className="nav-item">
              <a className="nav-link active" href="/sea">{title}</a>
            </li>
          )        
        })
      }        
    </ul>  
  );
}

export default BirdNav;