function BirdCard(props) {
  
  return (
    <div className="card">
      <div className="image-container">
        <img 
          src={props.image}
          // onLoad={((event) => event.target.classList.remove('invisible'))}
          className="card-img-top img-thumbnail" 
          alt={props.title} />
          <div className="spinner-border text-info centered" role="status">
            <span className="sr-only">Loading...</span>
          </div>
      </div>
     
      <div className="card-body">        
        <audio src={props.audio} className="d-block m-auto" controls>          
          Тег audio не поддерживается вашим браузером. 
        </audio> 
      </div>
    </div>
  );
}

export default BirdCard;