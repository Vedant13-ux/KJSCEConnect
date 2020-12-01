import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { apiCall } from "../../services/api";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { MContext } from "../../services/Provider";

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                { text: "Python" },
                { text: "Node.Js" },
                { text: "Django" },
                { text: "Javascript" },
                { text: "C++" },
                { text: "React Native" },
            ],
            value: {
                min: 3,
                max: 7,
            },
        };
        this.handleSkills = this.handleSkills.bind(this);
        this.multiselectRef = React.createRef();
    }

    handleSkills() {
        const skillInput = document.querySelector(".searchBox");
        var query = skillInput.value;
        console.log(query);
        apiCall("get", "/api/internship/skillSuggestion/" + query, "")
            .then((data) => {
                console.log(data);
                this.setState({ skills: data });
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <MContext.Consumer>
                {(context) => (
                    <div className="filterForm">
                        <label className="labelFilter">By Skills</label>
                        <Multiselect
                            options={this.state.skills} // Options to display in the dropdown
                            selectedValues={this.state.skillsRequired} // Preselected value to persist in dropdown
                            // onSelect={this.onSelect} // Function will trigger on select event
                            // onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="text" // Property name to display in the dropdown options
                            onSearch={this.handleSkills}
                            ref={this.multiselectRef}
                        />
                        <div className="intType">
                            <label className="labelFilter">Type</label>
                            <div class="checkbox">
                                <input type="checkbox" value="Work From Home" />
                                <label>Work From Home</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" value="Work From Home" />
                                <label>Active</label>
                            </div>
                        </div>
                        <label className="labelFilter">Duration (in Months)</label>
                        <InputRange
                            draggableTrack
                            maxValue={12}
                            minValue={1}
                            onChange={value => this.setState({ value: value })}
                            onChangeComplete={value => console.log(value)}
                            value={this.state.value} />

                        <button type="button" class="btn btn-default">
                            Apply Filters
                        </button>
                    </div>
                )}
            </MContext.Consumer>
        );
    }
}

export default FilterForm;