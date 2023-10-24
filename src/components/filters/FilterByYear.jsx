import React from 'react';

const FilterByYear = ({ yearFilter, handleSelectYear, years }) => {
  //control de select
  const handleSelectSearch = (ev) => {
    handleSelectYear(ev.target.value);
  };
  //recojo los años
  const renderYear = () => {
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };
  return (
    <>
      <label className="" htmlFor="yearFilter">
        Año de la película
        <select
          name="yearFilter"
          id="yearFilter"
          value={yearFilter}
          onChange={handleSelectSearch}
        >
          <option value="all">Todos</option>
          {renderYear()}
        </select>
      </label>
    </>
  );
};

export default FilterByYear;
