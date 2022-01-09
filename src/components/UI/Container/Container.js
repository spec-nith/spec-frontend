import React from "react";
const container = (props) => {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-abrilface text-center">{props.title}</h1>
        </div>
      </header>
      {props.text ? (
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-24">
            <div className="py-6 sm:px-0">
              <div className="text-lg font-monty h-auto text-justify leading-loose">
                {props.text}
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
};
export default container;
