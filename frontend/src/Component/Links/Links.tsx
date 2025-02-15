import React from "react";
import MenuItem from "../MenuItem/MenuLinks";

function Links() {
  return (
    <div className="links">
      <MenuItem linktext="Home" linkurl="/" />
      <MenuItem linktext="Book Details" linkurl="/book" />
    </div>
  );
}

export default Links;
