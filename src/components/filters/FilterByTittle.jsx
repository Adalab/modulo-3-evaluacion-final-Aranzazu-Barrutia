import React from 'react';

const FilterByTittle = ({ searchTitleFilter, handleChangeTitle }) => {
  const handleInputSearch = (ev) => {
    handleChangeTitle(ev.target.value);
  };
  return (
    <>
      <label htmlFor="search_title">
        <input
          type="text"
          name="search_title"
          id="search_title"
          placeholder="Busca tu peli"
          value={searchTitleFilter}
          onChange={handleInputSearch}
        />
        Título de la película:
      </label>
    </>
  );
};

export default FilterByTittle;
