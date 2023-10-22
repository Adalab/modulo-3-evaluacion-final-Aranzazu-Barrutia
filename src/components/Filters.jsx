import React from 'react';
import FilterByTittle from './FilterByTittle';
import FilterByYear from './FilterByYear';
const Filters = ({ titleFilter, handleCanche }) => {
  return (
    <>
      <form action="">
        <FilterByTittle titleFilter={titleFilter} handleCanche={handleCanche} />
        <FilterByYear yearFilter={FilterByYear} />
      </form>
    </>
  );
};

export default Filters;
