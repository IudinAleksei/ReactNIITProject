const BirdDescription = (props) => {
  return (
    <div className="bird-description">
      <h3 className="text-center mt-3">{props.title}</h3>
      <p className="fs18">{props.text}</p>
    </div>
  );
}

export default BirdDescription;
