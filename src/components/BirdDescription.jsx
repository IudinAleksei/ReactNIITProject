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
    getDataFromApi(`${URL_PHOTO_API}${props.title}`)
      .then((res) => setUrl(res.photos.photo[0].url_m))
    ;
  });
  
  return (
    <div className="bird-description">
      <h3 className="text-center mt-3">{props.title}</h3>
      <p className="fs18">{props.text}</p>
      <img src={url} className="card-img-top img-thumbnail" alt="..." />
    </div>
  );
}

export default BirdDescription;
