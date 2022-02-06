import React from "react";
import "./filters.css";

const Filter = ({ filter_keys, displayChoice, setDisplayChoice, toShow }) => {
  let overflow = filter_keys.slice(toShow);

  return (
    <div className="flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30">
      <div className="flex flex-row w-full md:w-auto flex-wrap">
        {filter_keys.slice(0, toShow).map((choice, index) => {
          return (
            <button
              className={
                "px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-black outline-0 grow md:grow-0 " +
                (displayChoice === choice
                  ? "active-filter-button "
                  : "filter-button ") +
                (index === 0 ? "md:rounded-l-full " : "border-x-2 -ml-2 ") +
                (index === toShow - 1 && overflow.length === 0
                  ? "md:rounded-r-full md:border-r-0 "
                  : "")
              }
              onClick={() => {
                setDisplayChoice(() => {
                  return choice;
                });
              }}
              key={index}
            >
              {choice}
            </button>
          );
        })}
        {overflow.length > 0 ? (
          <select
            className={
              "p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-black outline-0 " +
              (overflow.includes(displayChoice)
                ? "active-filter-button "
                : "filter-button ")
            }
            value={overflow.includes(displayChoice) ? displayChoice : "0"}
            onChange={(e) => setDisplayChoice(e.target.value)}
          >
            <option disabled hidden value="0">
              Show More
            </option>
            {overflow.map((choice) => {
              return (
                <option value={choice} key={choice}>
                  {choice}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Filter.defaultProps = {
  toShow: 3,
};
export default Filter;
