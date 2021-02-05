import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});

  const fetcher = () => {
    fetch(`https://swapi.dev/api/people/${query}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setResults(json);
      });
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="enter your sw character number"
        />
        <button onClick={() => fetcher()}>Click for a character</button>
        {results ? <h2>{results.name}</h2> : <div></div>}
      </div>
    </div>
  );
};

export default Hooks;
