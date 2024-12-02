import React from 'react';

function Filter({ filterText, onFilter }) {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleChange}
        className="form-control mb-3"
      />
    </form>
  );
}

export default Filter;
