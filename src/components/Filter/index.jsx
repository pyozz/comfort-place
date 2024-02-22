import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

import { filterActions } from "@/store/slices/filterSlice.js";
import { removeDuplicates } from "../../utils/helpers";

import * as S from "./style";

function Filter() {
  const { all_products, filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    <div>
      <S.SearchControl>
        <input
          type="text"
          name="text"
          value={filters.text}
          placeholder="search"
          onChange={handleChange}
        />
        <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <IoFilter />
        </button>
      </S.SearchControl>

      {isFilterOpen && (
        <S.MoreOptions>
          <article className="categories">
            <h2>카테고리</h2>

            <div className="button-container">
              {categories.map((category, i) => {
                return (
                  <button
                    key={i}
                    className={
                      category.toLowerCase() === filters.category
                        ? "is-active"
                        : null
                    }
                    type="button"
                    name="category"
                    onClick={handleChange}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </article>

          <article className="companies">
            <h2>제조사</h2>

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
          </article>

          <article className="colors">
            <h2>색상</h2>

            <div className="button-container">
              {colors.map((color, i) => {
                return (
                  <button
                    key={i}
                    className={color === filters.color ? "is-active" : null}
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
          </article>

          <article className="price">
            <h2>가격</h2>
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
          </article>

          <div className="shipping">
            <label htmlFor="shipping">무료배송</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={filters.shipping}
              onChange={handleChange}
            />
          </div>

          <S.ResetButton type="button" onClick={handleReset}>
            초기화
          </S.ResetButton>
        </S.MoreOptions>
      )}
    </div>
  );
}

export default Filter;
