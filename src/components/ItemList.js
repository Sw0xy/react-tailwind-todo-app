import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item'
function ItemList() {
  const { items, error } = useSelector((state) => state.todos);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className='flex w-full flex-col mt-3'>
      {
       
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}

export default ItemList