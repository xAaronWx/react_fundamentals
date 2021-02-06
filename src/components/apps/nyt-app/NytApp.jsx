import React, { useState } from "react";

const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "";

const NytApp = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [results, setResults] = useState([]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>NYT</h1>
      </div>
    </div>
  );
};

export default NytApp;
