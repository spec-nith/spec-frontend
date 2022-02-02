import React from "react";
import axios from "axios";
import Layout from "components/Layout/Layout";
import Loader from "react-loader-spinner";
import Head from "utils/helmet";

// For MainBody data is available via props
// <------------- Funtional Component ------------->
const MainBody = (props) => {
  return <React.Fragment>{/* Content Goes Here */}</React.Fragment>;
};

// <------------- Class based Component ------------->
// class MainBody extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     render() {
//         return(
//             <React.Fragment>
//                 {/* Content Goes Here */}
//             </React.Fragment>
//         )
//     }
// }

class GenericPage extends React.Component {
  constructor() {
    super();
    this.state = {
      wait: true,
      data: [],
      error: false,
      errorData: [],
    };
  }
  componentDidMount() {
    axios
      .get("API URL goes here", { timeout: 10000 })
      .then((response) => {
        this.setState({ data: response.data, wait: false });
      })
      .catch((err) => {
        console.log(err.response);
        let msg = "Request Timed Out";
        if (err.response) {
          msg =
            err.response.status && err.response.statusText
              ? "API Error: " +
                err.response.status +
                " " +
                err.response.statusText
              : "API request failed";
        }
        this.setState({ error: true, errorMsg: msg, wait: false });
      });
  }

  renderLoader() {
    if (this.state.wait) {
      return (
        <div className="flex h-90v justify-center items-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={10000} // 10 secs wait until error message shows
          />
        </div>
      );
    }
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className="flex flex-wrap h-90v">
          <div className="flex items-end md:items-center justify-end w-full md:w-1/2">
            <picture className="flex justify-center md:justify-end px-8">
              <source srcSet="error.webp" type="image/webp" />
              <img src="error.webp" className="w-1/2" alt="error_image" />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl">
            <p className="w-full text-red-500">{this.state.errorMsg}</p>
            <p className="w-full text-xl">
              Ah Snap! Something was broken. We're trying to fix this
            </p>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <Layout>
        <Head title="PAGE TITLE GOES HERE" />
        {this.renderLoader()}
        {this.renderError()}
        {this.state.wait || this.state.error ? (
          ""
        ) : (
          <MainBody data={this.state.data} />
        )}
      </Layout>
    );
  }
}

export default GenericPage;
