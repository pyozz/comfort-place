import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/store/slices/filterSlice.js";

function Filter() {
  const { filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.filterProducts());
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(filterActions.updateFilters({ name, value }));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={filters.text}
          placeholder="search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Filter;
