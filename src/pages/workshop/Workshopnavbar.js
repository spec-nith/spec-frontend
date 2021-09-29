import React from "react";
import WorkshopCompo from "./WorkshopCompo";


export default class Workshopnavbar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      openTab: 1
    }
  }

  render() {
    return(
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-7x1">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center text-6x1">
              <a
                className={
                  "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab === 1
                    ? "text-white bg-" + this.props.color + "-600"
                    : "text-" + this.props.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({openTab: 1});
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                2020-2021
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab === 2
                    ? "text-white bg-" + this.props.color + "-600"
                    : "text-" + this.props.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({openTab: 2});
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                2019-2020
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab === 3
                    ? "text-white bg-" + this.props.color + "-600"
                    : "text-" + this.props.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({openTab: 3});
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                2018-2019
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto bg-black">
              <div className="tab-content tab-space">
                <div className={this.state.openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="">

                    {this.props.dummy.map((element) => {
                      return <div className="">
                        <WorkshopCompo number={element.number} workshopname={element.name} content={element.content} />
                      </div>
                    })}
                  </p>
                </div>
                <div className={this.state.openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    {this.props.dummy.map((element) => {
                      return <div className="">
                        <WorkshopCompo number={element.number} workshopname={element.name} content={element.content} />
                      </div>
                    })}

                  </p>
                </div>
                <div className={this.state.openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    {this.props.dummy.map((element) => {
                      return <div className="">
                        <WorkshopCompo number={element.number} workshopname={element.name} content={element.content} />
                      </div>
                    })}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )};
};


Workshopnavbar.defaultProps = {
  dummy: [""]
}
