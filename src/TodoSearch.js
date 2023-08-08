import React from "react";

function TodoSearch({searchValue, setSearchValue}) {
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