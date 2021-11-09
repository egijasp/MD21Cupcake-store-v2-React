import { FC } from 'react';

type LogoProps = {
  imgSrc: string,
  alt: string,
}

const Logo:FC<LogoProps> = ({ imgSrc, alt }) => (
  <img src={imgSrc} alt={alt} />
);

export default Logo;
