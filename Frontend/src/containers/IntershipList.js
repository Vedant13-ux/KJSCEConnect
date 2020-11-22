import React, { Component } from "react";
import Internship from "./Intership";
import { apiCall } from "../services/api"

class InternshipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      internships: []
    };
  }

  componentDidMount() {
    let url = '/api/internship/search/all';
    apiCall('get', url, '')
      .then((internships) => {
        console.log(internships);
        return this.setState({ internships })
      })
      .catch(err => {
        console.log(err);
      })
  }
  // searchInternships(){}

  render() {
    return (
      <div className="homeSection">
        <div id="top-bar">
          <button type="button" className="btn btn-default btn-circle btn-lg"><i class="fa fa-filter"></i>
          </button>
        </div>
        <div id="intershiplist">
          <div class="row">
            {this.state.internships.map((internship) => {
              return (
                <Internship key={internship._id} {...internship}></Internship>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default InternshipList;
