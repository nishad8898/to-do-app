import React, { useRef } from "react";
import useStore from "../../store";
import "./InputBox.scss";

function InputBox() {
  const addItem = useStore((state) => state.addItem);
  const todoRef = useRef();
  const handleAdd = () => {
    if (!todoRef.current.value) return;
    addItem(todoRef.current.value);
    todoRef.current.value = "";
  };
  return (
    <div className="input-box">
      <div className="input-todo">
        <label>add to do :</label>
        <input type="text" name="to-do" ref={todoRef} />
        <div className="input-add" onClick={handleAdd}>
          add
        </div>
      </div>
    </div>
  );
}

export default InputBox;
