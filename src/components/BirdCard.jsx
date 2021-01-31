function BirdCard(props) {
  
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">        
        <audio controls>
          <source src={props.audio} type="audio/mpeg" />
          Тег audio не поддерживается вашим браузером. 
        </audio> 
      </div>
    </div>
  );
}

export default BirdCard;