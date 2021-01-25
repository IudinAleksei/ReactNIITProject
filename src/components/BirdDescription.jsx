const BirdDescription = (props) => {
  return (
    <div className="bird-description">
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
}

export default BirdDescription;
