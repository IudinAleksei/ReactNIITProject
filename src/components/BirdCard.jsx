function BirdCard(props) {
  return (
    <div className="card">
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5>'Corvus corax'</h5>
        <audio controls>
          <source src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" type="audio/mpeg" />
          Тег audio не поддерживается вашим браузером. 
        </audio> 
      </div>
    </div>
  );
}

export default BirdCard;