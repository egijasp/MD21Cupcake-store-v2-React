import { FC } from 'react';
import './Heading.scss';

type Heading1Props = {
  text: string;
  strongText?: string;
  id?: string,
}

const Heading1:FC<Heading1Props> = ({ text, strongText, id }) => (
  <h1 id={id} className="heading1">
    {text}
    <strong className="heading1--strong">
      {' '}
      {strongText}
    </strong>
  </h1>
);

export default Heading1;
