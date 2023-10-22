import React from 'react';

const FilterByTittle = ({ titleFilter, handleCanche }) => {
  const handleTittleInput = (ev) => {
    handleChange(ev.target.value);
  };
  return (
    <>
      <label htmlFor="search">Título de la película</label>
      <input
        type="text"
        name="search_title"
        id="search_title"
        placeholder="busca una peli"
        value={titleFilter}
        onChange={handleTittleInput}
      />
    </>
  );
};

export default FilterByTittle;
