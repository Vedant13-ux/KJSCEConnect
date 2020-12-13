import React, { Component } from "react";
import Navbar from "../Global/Navbar";
import PageFooter from "../Global/PageFooter";
import RecommInternship from "./RecommInternship"
import { apiCall } from "../../services/api"
import NotFoundSVG from "../../images/NotFound.js"
import Loading from "../../images/Loading"
import { ApplyInternship } from '../Global/Utilities';
import Modal from "react-bootstrap/Modal";
import { Multiselect } from "multiselect-react-dropdown";


class InternshipDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exists: false,
      start: true,
      details: {},
      recommlist: [],
      user: this.props.currentUser.user,
      applied: false,
      owner: true,
      show1: false,
      show2: true,
      emails: ['Hello', 'Vedant']
    };
    this.contentDisplay = this.contentDisplay.bind(this);
    this.onApply = this.onApply.bind(this);
    this.handleClose1 = () => this.setState({ show1: false });
    this.handleShow1 = () => this.setState({ show1: true });
  }

  getApplicantsEmail() {
    var emails = [];
    this.state.details.applicants.map(app => emails.push(app['email']));
    return emails;
  }


  componentWillMount() {
    document.documentElement.scrollTop = '0';
    return apiCall('get', '/api/internship/details/' + this.props.match.params.id, '')
      .then(
        async (data) => {
          console.log(data)
          if (Object.keys(data).length !== 0) {
            apiCall('get', '/api/internship/search/skills?skills=' + data["skillsRequired"].join(','))
              .then(
                async (recomm) => {
                  if (this.state.user.applications.includes(this.props.match.params.id)) {
                    await this.setState({ applied: true })
                  }
                  await this.setState({ details: data, recommlist: recomm, exists: true, start: false });
                  // await this.setState({ emails: this.getApplicantsEmail() });
                  console.log(this.state);
                }).catch(
                  (e) => this.setState({ exist: false, start: false })
                )
            return
          } else {
            await this.setState({ exists: false, start: false })
          }

        }

      ).catch(
        (e) => {
          this.setState({ exist: false, start: false })
        }
      )

  }
  async onApply(e) {
    e.preventDefault();
    await this.setState({ applied: true })
  }
  contentDisplay(exists, start) {
    console.log("this tbh", exists, start)
    if (start) {
      return (
        <div className="loading-anime">
          <Loading class="loading-wheel" />
        </div>
      )
    }
    if (exists) {
      return (
        <div id="internshipdetail">
          <div class="container">
            <div class="row">
              <div class="col-8">
                <div className="card">
                  <div className="card-body">
                    <h1>{this.state.details.title}</h1>
                    <div class="provider">
                      <img
                        src={this.state.details.faculty.photo}
                        alt="pfp"
                        className="avatar-pro"
                      ></img>
                      <a className="author" href="./home">
                        {this.state.details.faculty.fname} {this.state.details.faculty.lname}
                      </a>
                    </div>
                    <br></br>
                    <div id="iconinfo" class="flex-container">
                      <div class="flex-item">
                        <h4>
                          <i class="fa fa-clock mr-1"></i>Duration
                </h4><p>{this.state.details.duration} months</p>
                      </div>
                      <div class="flex-item">
                        <h4>
                          <i className="fa fa-home mr-1"></i>Type
                </h4><p> {this.state.details.type}</p>
                      </div>

                      <div class="flex-item"><h4>
                        <i class="fa fa-hourglass mr-2"></i>Apply by
                    </h4><p>{(new Date(this.state.details.applyBy)).toDateString()}</p></div>
                    </div><hr></hr>
                    <h3>About Internship</h3>
                    <p>{this.state.details.description}</p>
                    <h3>Who can Apply</h3>
                    <p>{this.state.details.whoCanApply}</p>
                    <h3>Other Requirement</h3>
                    <p>{this.state.details.otherRequirements}</p>
                    <h3>Skills Required</h3>
                    <div>
                      {this.state.details.skillsRequired.map((skill, ind) => {
                        return (
                          <div id={ind} className="tagsskill">
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                    <h3>Perks</h3>
                    <p>{this.state.details.perks}</p>
                    <h3> Number of Opening</h3>
                    <p>{this.state.details.numberOpenings}</p>

                    <h3>
                      Applicants {this.state.owner &&
                        <div>
                          <button onClick={this.handleShow1} className="mailAppl ui small button">Mail Applicants</button>
                          <Modal show={this.state.show1} onHide={this.handleClose1} centered>
                            <Modal.Header closeButton backdrop="static">
                              <Modal.Title>Send Mail</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form className="ui form">
                                <div className="field">
                                  <label>To</label>
                                  <Multiselect
                                    options={this.state.emails}
                                    selectedValues={this.state.emails}
                                    displayValue="text"
                                    onSearch={this.handleSkills}
                                    ref={this.multiselectRef}
                                  />
                                </div>
                                <div className="ui field">
                                  <label>Subject</label>
                                  <input type="text" required></input>
                                </div>
                                <div className="ui field">
                                  <label>Text</label>
                                  <textarea required></textarea>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                  <button className="ui button">Send</button>
                                </div>
                              </form>
                            </Modal.Body>
                          </Modal>
                        </div>
                      }
                    </h3>
                    <span className="appliList">
                      <span className="applicant">
                        <img src={this.props.currentUser.user.photo} alt=""></img>
                        <span className="name">Vedant Nagani</span>
                      </span>
                      <span className="applicant">
                        <img src={this.props.currentUser.user.photo} alt=""></img>
                        <span className="name">Vedant Nagani</span>
                      </span>
                    </span>
                    <ApplyInternship onApply={this.onApply} duration={this.state.details.duration} user={this.state.user._id} internship={this.state.details._id} applied={this.state.applied}></ApplyInternship>
                  </div>
                </div>
              </div>
              <div class="col-4 recommendations">
                <div class="card recomm">
                  <h3>Recommendations</h3>
                  <hr></hr>
                  <div className="scroll">
                    {this.state.recommlist.map((int, ind) => {
                      return <RecommInternship {...int}></RecommInternship>
                    })}
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )
    } else if (exists === false) {
      return (
        <NotFoundSVG />

      )
    }
  }



  render() {
    const { exists, start } = this.state;
    console.log(exists);
    return (
      <div>
        <Navbar currentUser={this.props.currentUser}></Navbar>
        {this.contentDisplay(exists, start)}
        <PageFooter />
      </div>
    );
  }
}

export default InternshipDetail;