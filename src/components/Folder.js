import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(true);

  const changeFolder = () => {
    if (expand) {
      return explorer.icon;
    } else {
      return explorer.iconClose;
    }
  };

  return (
    <div>
      <span onClick={() => setExpand(!expand)}>
        <img src={changeFolder()} className="icon" />
        {explorer.name}
      </span>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
        {explorer.items.map((item) => (
          <Folder key={item.name} explorer={item} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
