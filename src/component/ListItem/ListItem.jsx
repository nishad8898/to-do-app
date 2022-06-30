import React from "react";
import "./ListItem.scss";
import useStore from "../../store";

const ListItem = ({ item, index }) => {
  const deleteItem = useStore((state) => state.deleteItem);
  const handleDelete = (index) => {
    deleteItem(index);
  };
  return (
    <div className="list-card">
      <div className="list-card-sr">
        <p>{index + 1}</p>
      </div>
      <div className="list-card-title">
        <p>{item}</p>
      </div>
      <div className="list-card-delete" onClick={() => handleDelete(index)}>
        delete
      </div>
    </div>
  );
};

export default ListItem;
