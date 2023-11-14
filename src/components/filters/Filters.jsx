import React from 'react';
import FilterByTittle from './FilterByTittle';
import FilterByYear from './FilterByYear';
const Filters = ({
  searchTitleFilter,
  handleChangeTitle,
  handleSelectYear,
  yearFilter,
  years,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefaut();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form">
        <FilterByTittle
          searchTitleFilter={searchTitleFilter}
          handleChangeTitle={handleChangeTitle}
        />
        <FilterByYear
          yearFilter={yearFilter}
          handleSelectYear={handleSelectYear}
          years={years}
        />
      </form>
    </>
  );
};

export default Filters;
