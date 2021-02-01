import { useEffect, useState } from "react";
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

const BirdDescription = (props) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getDataFromApi(`${URL_PHOTO_API}${props.latin}`)
      .then((res) => setUrl(res.photos.photo[0].url_m))
    ;
  }, [props.latin]);
  
  return (
    <div className="bird-description">
      <div className="image-container">
        <img 
          key={props.latin}
          src={url} 
          // onLoad={((event) => event.target.parentNode.classList.remove('invisible'))}
          className="card-img-top img-thumbnail"  
          alt={props.latin}/>
          <div className="spinner-border text-info centered" role="status">
            <span className="sr-only">Loading...</span>
          </div> 
      </div>
           
      <h3 className="text-center mt-3">{props.title}</h3>
      <h4 className="text-center mt-1">({props.latin})</h4>
      <p className="fs18">{props.text}</p>
     
    </div>
  );
}

export default BirdDescription;
