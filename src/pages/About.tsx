import './About.scss';
import { FC } from 'react';
import Heading1 from '../componentes/Heading1/Heading1';
import Button from '../componentes/Button/Button';

type AboutProps = {
  id?: string,
}

const About: FC<AboutProps> = ({ id }) => (
  <div className="about">
    <div className="about__text">
      <Heading1
        id="About"
        text="about"
        strongText="us"
      />
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit, aliquam voluptas beatae vitae expedita consectetur
        nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!
      </p>
      <Button buttonTitle="explore" />
    </div>
    <div className="about__image-container">
      <div className="about__image-wrapper">
        <img className="about__image" src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg" alt="macaroons" />
      </div>
    </div>
  </div>
);

export default About;
