import React from "react";
import useStore from "../../store";
import ListItem from "../ListItem/ListItem";
import "./ListCollection.scss";

function ListCollection({ title }) {
  const items = useStore((state) => state.items);
  return (
    <div className="list-box">
      <div className="list-title">{title}</div>
      <div className="list-to-do">
        <div className="list-collection">
          {items.length ? (
            items.map((el, i) => <ListItem key={i} index={i} item={el} />)
          ) : (
            <div className="no-items">no todo's 🙌</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListCollection;
