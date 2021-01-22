import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { apiCall } from "../../services/api";
import { connect } from 'react-redux'
import { internshipCreate } from '../../store/actions/user'

class Intershipform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      skillsRequired: [],
      duration: "",
      applyBy: "",
      numberOpenings: "",
      otherRequirements: "",
      department: "",
      type: "Work from Home",
      description: "",
      perks: "",
      whoCanApply: "",
      faculty: {
        _id: this.props.currentUser.user._id,
        fname: this.props.currentUser.user.fname,
        lname: this.props.currentUser.user.lname,
        photo: this.props.currentUser.user.photo,
        email: this.props.currentUser.user.email,
      },
      skillData: [
        { text: "Python" },
        { text: "Node.Js" },
        { text: "Django" },
        { text: "Javascript" },
        { text: "C++" },
        { text: "React Native" },
      ],
      category: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.multiselectRef = React.createRef();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSkills() {
    const skillInput = document.querySelector(".searchBox");
    var query = skillInput.value;
    console.log(query);
    apiCall("get", "/internship/skillSuggestion/" + query, "")
      .then(async (data) => {
        console.log(data);
        await this.setState({ skillData: data });
      })
      .catch((err) => console.log(err));
  }
  async handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    var skills = this.multiselectRef.current.getSelectedItems();
    var skillArray = [];
    skills.forEach((skill) => {
      skillArray.push(skill.text);
    });
    await this.setState({ skillsRequired: skillArray, skillData: [] });

    this.props.internshipCreate(this.state).then(
      (id) => {
        console.log("Created");
        return this.props.history.push('/internship/' + id);
      }
    )
      .catch(err => console.log(err));
    console.log(this.state);
  }

  render() {
    const {
      title,
      duration,
      applyBy,
      numberOpenings,
      otherRequirements,
      department,
      description,
      perks,
      whoCanApply,
      category
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} id="internshipForm">
        <div className="ui form">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input
                name="title"
                maxLength="30"
                required
                value={title}
                onChange={this.handleChange}
                type="text"
                placeholder="eg. Frontend with React"
              ></input>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Department</label>
              <select
                name="department"
                required
                value={department}
                onChange={this.handleChange}
              >
                <option value="">Department</option>
                <option value="it">IT</option>
                <option value="cs">Comps</option>
                <option value="extc">EXTC</option>
                <option value="etrx">ETRX</option>
                <option value="mech">Mech</option>
                <option value="neutral">Neutral</option>
              </select>
            </div>

            <div className="field">
              <label>Apply By</label>
              <input
                required
                type="Date"
                name="applyBy"
                value={applyBy}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Duration (in months)</label>
              <input
                type="number"
                min="1"
                max="12"
                required
                name="duration"
                value={duration}
                placeholder="eg. 1"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="field">
              <label>Number of opening</label>
              <input
                type="number"
                min="1"
                required
                name="numberOpenings"
                placeholder="eg. 2"
                value={numberOpenings}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Type</label>

              <span className="mr-4">
                <input type="radio" id="wfh" onChange={this.handleChange} name="type" value="Work from Home" className="mr-2" />
                <label for="wfh">Work from Home</label>
              </span>
              <span>
                <input type="radio" id="ext" onChange={this.handleChange} name="type" value="External" className="mr-2" />
                <label for="ext">External</label>
              </span>
            </div>

            <div className="field">
              <label>Category</label>
              <select
                name="category"
                required
                value={category}
                onChange={this.handleChange}
              >
                <option value="">Category</option>
                <option value="Internship">Internship</option>
                <option value="Research">Research</option>
                <option value="Recruitment">Recruitment</option>
              </select>
            </div>

          </div>
        </div>

        <div className="field">
          <label className="skillsRequired">Skills Required</label>
          <Multiselect
            options={this.state.skillData} // Options to display in the dropdown
            selectedValues={this.state.skillsRequired} // Preselected value to persist in dropdown
            displayValue="text" // Property name to display in the dropdown options
            onSearch={this.handleSkills}
            ref={this.multiselectRef}
            placeholder="Search and Select Skills"
          />
        </div>

        <div className="ui form">
          <div className="field">
            <label>Who can Apply</label>
            <textarea
              maxlength="200"
              rows="2"
              required
              placeholder="eg. Only those candidates can apply who have relevant skills and interests and are available for duration of 3 months"
              name="whoCanApply"
              value={whoCanApply}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label>About Internship</label>
            <textarea
              maxlength="200"
              rows="2"
              required
              placeholder="eg. Do daily assigned task and fix issues in github"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label>Other Requirements</label>
            <textarea
              maxlength="200"
              rows="2"
              required
              placeholder="eg. Should have communication and leadership skills"
              name="otherRequirements"
              value={otherRequirements}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label>Perks</label>
            <textarea
              maxlength="100"
              rows="2"
              required
              name="perks"
              placeholder="eg. Certificate,Letter of recommendation,Flexible work hours "
              value={perks}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="submit">
            <button className="big ui button">ADD</button>
          </div>
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { internshipCreate })(Intershipform);
