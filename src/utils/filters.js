import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./filters.css";
const defaultNO = 2;

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Filter = ({
  filter_keys,
  displayChoice,
  setDisplayChoice,
  visibleChoices,
}) => {
  let [toShow, setToShow] = useState(
    Math.min(visibleChoices, filter_keys.length)
  );
  let [toggle, setToggle] = useState(true);
  const { width } = useWindowDimensions();
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  useEffect(() => {
    if (width < 768) {
      setToShow(defaultNO);
    } else {
      setToShow(Math.min(visibleChoices, filter_keys.length));
    }
  }, [width, visibleChoices, filter_keys]);
  let overflow = filter_keys.slice(toShow);

  return (
    <div className="flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30 ">
      <div className="flex flex-row w-full md:w-auto flex-wrap">
        {filter_keys.slice(0, toShow).map((choice, index) => {
          return (
            <button
              className={
                "px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-gray-600 outline-0 grow md:grow-0 border border-transparent hover:scale-105 " +
                (displayChoice === choice
                  ? "btn-gradient "
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
          <div ref={ref}>
            <button
              className={
                "p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-gray-600 outline-0 outline-0 border border-transparent hover:scale-105 " +
                (overflow.includes(displayChoice)
                  ? "btn-gradient "
                  : "filter-button ")
              }
              onClick={() => setToggle((prev) => !prev)}
            >
              Show More
              <span className="px-2">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="hidden lg:inline-block"
                />
                <FontAwesomeIcon icon={faChevronUp} className="lg:hidden" />
              </span>
            </button>
            <div
              className={
                "z-50 absolute overflow-hidden -top-36 lg:top-auto" +
                (toggle ? " max-h-0" : " max-h-96")
              }
            >
              <ul className=" bg-violet-600 p-2 ">
                {overflow.map((choice) => {
                  return (
                    <li key={choice}>
                      <button
                        data-choice={choice}
                        onClick={(e) =>
                          setDisplayChoice(e.target.getAttribute("data-choice"))
                        }
                        className=" hover:scale-105 p-2 text-white"
                      >
                        {choice}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Filter.defaultProps = {
  visibleChoices: defaultNO,
};
export default Filter;
