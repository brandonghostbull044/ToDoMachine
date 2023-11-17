import React from "react";
import './index.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
      <input 
      placeholder="Buscar" 
      className="Search_input" 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
  }

  export { TodoSearch };