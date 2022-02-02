import React from "react";
import axios from "axios";
import Layout from "components/Layout/Layout";
import Loader from "react-loader-spinner";
import Head from "utils/helmet";


// For MainBody data is available via props
// <------------- Funtional Component ------------->
const MainBody = (props) =>{
    return(
        <React.Fragment>
            {/* Content Goes Here */}
        </React.Fragment>
    )
}


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
        error:false,
        errorData:[]
      };
    }
    componentDidMount() {
      axios
        .get("API URL GOES HERE")
        .then((response) => {
          this.setState({ data: response.data, wait: false });
        })
        .catch((err) => {
          console.log(err.response);
          this.setState({error: true, errorData: err.response, wait: false})
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
                    timeout={100000} // 10 secs wait until error message shows
                  />
                </div>
            );
          }
    }

    renderError() {
        if (this.state.error){
            return(
                <div className="flex flex-wrap h-90v">
                  <div className="flex items-center justify-end w-full md:w-1/2">
                    <img src="error.webp"/>
                  </div>
                  <div className="flex items-center justify-start w-full md:w-1/2 text-white p-4">
                    <h1>YO YO this is fucked</h1>
                    <h1>{this.state.errorData.status}</h1>
                    <h1>{this.state.errorData.statusText}</h1>
                  </div>
                </div>
            )
          }
    }
    render() {
        return(
             <Layout>
                 <Head title="PAGE TITLE GOES HERE" />
                 { this.renderLoader() }
                 { this.renderError() }
                 {(this.state.wait || this.state.error) ? "" : <MainBody data={this.state.data}/>}
             </Layout>
        )
    }
  }
  
  export default GenericPage;
  