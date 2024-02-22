import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";

import { filterActions } from "@/store/slices/filterSlice.js";
import { removeDuplicates } from "../../utils/helpers";

import * as S from "./style";

function Filter() {
  const { all_products, filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.filterProducts());
  }, [filters]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "category") value = e.target.textContent;
    if (name === "color") value = e.target.dataset.color;
    if (name === "price") value = +value;
    if (name === "shipping") value = e.target.checked;

    dispatch(filterActions.updateFilters({ name, value }));
  };

  const handleReset = () => {
    dispatch(filterActions.clearFilters());
  };

  const categories = removeDuplicates(all_products, "category");
  const companies = removeDuplicates(all_products, "company");
  const colors = removeDuplicates(all_products, "colors");

  return (
    <S.Filters>
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

        <div className="colors">
          {colors.map((color, i) => {
            return (
              <button
                key={i}
                type="button"
                name="color"
                style={{
                  backgroundColor: color,
                }}
                data-color={color}
                onClick={handleChange}
              >
                {i === 0 && "all"}
                {i !== 0 && color === filters.color ? (
                  <FaCheck size={12} />
                ) : null}
              </button>
            );
          })}
        </div>

        <div>
          <p>{filters.price.toLocaleString()}</p>
          <input
            type="range"
            name="price"
            value={filters.price}
            min={filters.min_price}
            max={filters.max_price}
            step="100000"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="shipping">무료배송</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={filters.shipping}
            onChange={handleChange}
          />
        </div>
      </form>

      <button type="button" onClick={handleReset}>
        초기화
      </button>
    </S.Filters>
  );
}

export default Filter;
