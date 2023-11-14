import React from 'react';

const FilterByTittle = ({ searchTitleFilter, handleChangeTitle }) => {
  const handleInputSearch = (ev) => {
    handleChangeTitle(ev.target.value);
  };
  return (
    <>
      <section className="input_section">
        <label className="input_label" htmlFor="search_title">
          Título de la película:
          <input
            className="input_title"
            type="text"
            name="search_title"
            id="search_title"
            placeholder="Busca tu peli"
            value={searchTitleFilter}
            onChange={handleInputSearch}
          />
        </label>
      </section>
    </>
  );
};

export default FilterByTittle;
