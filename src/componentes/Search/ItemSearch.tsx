import './ItemSearch.scss';
import { ChangeEvent, FC } from 'react';

type ItemSearchProps = {
  value: string,
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ItemSearch:FC<ItemSearchProps> = ({ value, placeholder, onChange }) => (
  <form className="search">
    <input
      className="search__input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  </form>
);

export default ItemSearch;
