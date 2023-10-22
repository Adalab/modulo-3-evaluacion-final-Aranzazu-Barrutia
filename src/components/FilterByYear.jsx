import React from 'react';

const FilterByYear = ({ yearFilter, handleChangeYear, years }) => {
  const handleSelectYear = (ev) => {
    handleChangeYear(ev.target.value);
  };

  const renderYear = () => {
    return years.map((year, index) => (
      <option value={year} key={index}>
        {year}
      </option>
    ));
  };

  return (
    <>
      <select
        name="search_year"
        id="search_year"
        value={yearFilter}
        onChange={handleSelectYear}
      >
        <option defaultChecked value="">
          Elige un año
        </option>
        <option value={film.year}></option>
        {renderYear()}
      </select>
    </>
  );
};

export default FilterByYear;
