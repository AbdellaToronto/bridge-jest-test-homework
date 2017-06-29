import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item/list-item.component';
const List = ({ listItems }) => {
  console.log(listItems);
  return (
    <ul>
      {
        listItems.map(({ id, itemTitle }) =>
          <ListItem
            itemTitle={itemTitle}
            key={id}
          />
        )
      }
    </ul>
  )
}

List.propTypes = {
  listItems: PropTypes.array.isRequired,
}

List.defaultProps = {
  listItems: [],
}

export default List;
