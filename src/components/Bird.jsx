import BirdCard from './BirdCard';
import BirdDescription from './BirdDescription';

function Bird() {
  return (
    <div className="row">
      <div className="col">
        <BirdCard />
      </div>
      <div className="col">
        <BirdDescription title="Ворона" text="умные птицы"/>
      </div>
    </div>    
  );
}

export default Bird;