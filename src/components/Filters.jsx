import React from 'react';
import FilterByTittle from './FilterByTittle';
import FilterByYear from './FilterByYear';
const Filters = ({
  titleFilter,
  handleChange,
  yearFilter,
  handleChangeYear,
}) => {
  return (
    <>
      <form action="">
        <FilterByTittle titleFilter={titleFilter} handleChange={handleChange} />
        <FilterByYear yearFilter={yearFilter} />
      </form>
    </>
  );
};

export default Filters;
