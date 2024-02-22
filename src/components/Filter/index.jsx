import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/store/slices/filterSlice.js";

import { removeDuplicates } from "../../utils/helpers";

function Filter() {
  const { all_products, filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.filterProducts());
  }, [filters]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "category") value = e.target.textContent;

    dispatch(filterActions.updateFilters({ name, value }));
  };

  const categories = removeDuplicates(all_products, "category");
  const companies = removeDuplicates(all_products, "company");
  const colors = removeDuplicates(all_products, "colors");

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

        <div>
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                type="button"
                name="category"
                onClick={handleChange}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div>
          <select
            name="company"
            value={filters.company}
            onChange={handleChange}
          >
            {companies.map((company, i) => {
              return (
                <option key={i} value={company}>
                  {company}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filter;
