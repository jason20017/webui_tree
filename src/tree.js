import React, { useState } from "react";

const Tree = ({ data = [] }) => {
  return (
    <div>
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-flex-column">
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibilty] = useState(false);
  const hasChild = node.children ? true : false;
  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisibilty((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            7
          </div>
        )}
        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}></i>
          {node.label}
        </div>
      </div>
      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-felx d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
