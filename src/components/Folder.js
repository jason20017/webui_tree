import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(true);
  return (
    <div>
      <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
        {explorer.items.map((item) => (
          <Folder key={item.name} explorer={item} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
