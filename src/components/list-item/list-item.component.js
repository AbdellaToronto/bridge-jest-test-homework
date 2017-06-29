import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ itemTitle }) => {
  console.log(itemTitle);
  return (
    <li
      style={{
        textAlign: 'left',
      }}    
    >
      { itemTitle }
    </li>
  )
}

ListItem.propTypes = {
  itemTitle: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
  itemTitle: "I'm a list item!",
}

export default ListItem;
