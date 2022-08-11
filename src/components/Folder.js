import React, { useState } from "react";
import EditIcon from "../icons/action-edit.svg";
import DeleteIcon from "../icons/action-delete.svg";
import checkEdit from "../icons/check-mark.png";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(true);
  const [edit, setEdit] = useState(false);

  //資料夾 icon 開 & 關
  const changeFolder = () => {
    if (expand) {
      return explorer.icon;
    } else {
      return explorer.iconClose;
    }
  };

  const Editable = (e) => {
    explorer.name = e.target.value;
  };

  return (
    <div>
      <span onClick={() => setExpand(!expand)}>
        <img src={changeFolder()} className="icon" />
        <div style={{ display: !edit ? "inline" : "none" }}>
          {explorer.name}
        </div>
        <input
          style={{ display: edit ? "inline" : "none" }}
          type="text"
          defaultValue={explorer.name}
          onChange={Editable}
        />
      </span>
      <img
        src={checkEdit}
        className="checkEdit"
        style={{ display: edit ? "inline" : "none" }}
        onClick={() => setEdit(!edit)}
      />
      <img src={EditIcon} className="edit" onClick={() => setEdit(!edit)} />
      <img src={DeleteIcon} className="icon" />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
        {explorer.items.map((item) => (
          <Folder key={item.name} explorer={item} />
        ))}
      </div>
    </div>
  );
}

export default Folder;

//input 若只用value={explorer.name}，在input box 中的value 無法edit，可以用defaultValue
