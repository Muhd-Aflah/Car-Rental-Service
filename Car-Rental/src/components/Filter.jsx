import React from "react";

function Filter({ filters, setFilters }) {
  function onChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "minPrice" || name === "maxPrice") value = Number(value || 0);
    setFilters({ ...filters, [name]: value });
  }

  return (
    <div className="filter">
      <input
        name="q"
        placeholder="Search by name..."
        value={filters.q}
        onChange={onChange}
      />
      <select name="type" value={filters.type} onChange={onChange}>
        <option value="All">All</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Hatchback">Hatchback</option>
      </select>
      <input name="minPrice" type="number" placeholder="Min" value={filters.minPrice} onChange={onChange} />
      <input name="maxPrice" type="number" placeholder="Max" value={filters.maxPrice} onChange={onChange} />
    </div>
  );
}

export default Filter;
