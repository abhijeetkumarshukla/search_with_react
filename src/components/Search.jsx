import { useState } from "react";
import { cricketers } from "../db";

const Search = () => {
  const [search, setSearch] = useState("");

  const filterData = cricketers.filter((cricketers) =>
    cricketers.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search with Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filterData.map((ele, ind) => (
          <li key={ind}>
            {ele.name} - {ele.age}years -{ele.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
