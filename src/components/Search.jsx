import React from "react";

const Search = () => {
  return (
    <div className="row">
      <div id="busca" className="col">
        <div className="np-input-text--value_holder">
          <input
            className="pl-4 np-input-text--value"
            type="text"
            placeholder="Pesquisar"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
