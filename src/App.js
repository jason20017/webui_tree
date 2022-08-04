import React from "react";
import Folder from "./components/Folder";
import explorer from "./Data/folderData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
export default App;
