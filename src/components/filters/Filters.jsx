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
      <form action="" onSubmit={handleSubmit}>
        <section>
          <FilterByTittle
            searchTitleFilter={searchTitleFilter}
            handleChangeTitle={handleChangeTitle}
          />
          <FilterByYear
            yearFilter={yearFilter}
            handleSelectYear={handleSelectYear}
            years={years}
          />
        </section>
      </form>
    </>
  );
};

export default Filters;
