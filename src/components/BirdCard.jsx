function BirdCard(props) {
  
  return (
    <div className="card">
      <img src={props.image} className="card-img-top img-thumbnail" alt="..." />
      <div className="card-body">        
        <audio src={props.audio} className="d-block m-auto" controls>          
          Тег audio не поддерживается вашим браузером. 
        </audio> 
      </div>
    </div>
  );
}

export default BirdCard;