import './StoreMenu.scss';
import { FC, useState } from 'react';
import Card from '../componentes/Card/Card';
import buttonTitles from '../data/buttonTitles';
import shopItems from '../data/shopItems';
import Button from '../componentes/Button/Button';
import Heading1 from '../componentes/Heading1/Heading1';
import ItemSearch from '../componentes/Search/ItemSearch';

type Props = {
  getPrice: (x: number) => void,
}

const StoreMenu:FC<Props> = ({ getPrice }) => {
  const [itemFilter, setItemFilter] = useState(shopItems);
  const [searchItems, setSearchItems] = useState('');

  const filter = (value: string) => {
    if (value === 'all') {
      setItemFilter(shopItems);
    } else {
      setItemFilter(shopItems.filter((item) => item.type === value));
    }
  };

  return (
    <div className="store">
      <div className="wrapper">
        <Heading1
          text="our"
          strongText="Store"
        />
      </div>
      <div className="wrapper">
        {
      buttonTitles.map((title) => (
        <Button
          key={title}
          buttonTitle={title}
          onClick={() => { filter(title); }}
        />
      ))
      }
      </div>
      <ItemSearch
        value={searchItems}
        placeholder="item..."
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <div className="wrapper">
        <div className="cards__container">
          {
        itemFilter.filter((title) => (title.title.toLowerCase().indexOf(searchItems) > -1))
          .map(({
            title, imgSrc, price, id,
          }) => (
            <Card
              item={title}
              image={imgSrc}
              price={price}
              key={id}
              getPrice={getPrice}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default StoreMenu;
