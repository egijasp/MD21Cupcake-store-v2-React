import './Hero.scss';
import Heading1 from '../componentes/Heading1/Heading1';
import Button from '../componentes/Button/Button';

const Hero = () => (
  <div className="hero">
    <div>
      <Heading1 text="welcome to" strongText="grandma's" />
    </div>
    <Button buttonTitle="EXPLORE" />
  </div>
);

export default Hero;
