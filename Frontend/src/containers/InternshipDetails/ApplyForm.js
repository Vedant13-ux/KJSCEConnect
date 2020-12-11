import React, { Component } from 'react';

class ApplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ques1: "Why should you be hired for this role?",
            ques2: "Are you avaiable for " + this.props.duration + " months, starting immediately? If not, what is the time period you are avaiable for and the earliest date you can start this internhsip on?",
            ans1: '',
            ans2: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} id="applyForm" className="ui form">
                <div class="field">
                    <label>{this.state.ques1}</label>
                    <textarea
                        maxlength="200"
                        rows="3"
                        required
                        name="ans1"
                        val={this.state.ans1}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <div class="field">
                    <label>{this.state.ques2}</label>
                    <textarea
                        maxlength="200"
                        rows="2"
                        required
                        name="ans1"
                        val={this.state.ans2}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button type="button" class="btn btn-default">
                        Apply Now
                    </button>
                </div>
            </form>
        )
    }
}
export default ApplyForm