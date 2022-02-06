import React from "react";

const Filter = ({ filter_keys, displayChoice, setDisplayChoice }) => {
  let overflow = filter_keys.slice(3);
  return (
    <div className="flex justify-center">
      <div className="flex fixed w-full bottom-0 xl:mx-12 xl:relative xl:w-auto flex-row z-30">
        {filter_keys.slice(0, 3).map((choice, index) => {
          return (
            <button
              className={
                "px-4 py-2 text-white border-2  hover:scale-110" +
                (displayChoice == choice ? " bg-blue-600" : " bg-blue-400")
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
        <select
          className="px-4 py-2 bg-blue-600 text-white border-2 hover:scale-110"
          value={overflow.includes(displayChoice) ? displayChoice : "0"}
        >
          <option disabled hidden selected value="0">
            Show More
          </option>
          {overflow.map((choice) => {
            return (
              <option
                value={choice}
                key={choice}
                onClick={(e) => setDisplayChoice(e.target.value)}
              >
                {choice}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
