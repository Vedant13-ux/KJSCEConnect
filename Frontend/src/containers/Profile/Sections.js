import React, { Component } from 'react'

export class Experience extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (<div></div>)
    }
}

export class ExperienceForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<form onSubmit={this.handleSubmit} id="internshipForm">
              <div className="ui form">
                <div className="field">
                  <label>Title</label>
                  <input
                    name="title"
                    maxLength="30"
                    required
                    // val={title}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="eg. Retail sales manager"
                  ></input>
                </div>
                {//employement type
                //company
                //checkbox currently working
                //start date end date
                //description
            }
                <div className="field">
                  <label>Issued on</label>
                  <input
                    required
                    type="Date"
                    name="date"
                    // val={date}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="submit confirmdiv">
                  <button className="medium ui button confirm">ADD</button>
                </div>
              </div>
            </form>)
    }
}

{/* <div class="ui feed">
  <div class="event">
    <div class="label">
      <img src="/images/avatar/small/elliot.jpg">
    </div>
    <div class="content">
      <div class="summary">
        <a class="user">
          Elliot Fu
        </a> added you as a friend
        <div class="date">
          1 Hour Ago
        </div>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 4 Likes
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <img src="/images/avatar/small/helen.jpg">
    </div>
    <div class="content">
      <div class="summary">
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div class="date">
          4 days ago
        </div>
      </div>
      <div class="extra images">
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 1 Like
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <img src="/images/avatar/small/jenny.jpg">
    </div>
    <div class="content">
      <div class="summary">
        <a class="user">
          Jenny Hess
        </a> added you as a friend
        <div class="date">
          2 Days Ago
        </div>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 8 Likes
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <img src="/images/avatar/small/joe.jpg">
    </div>
    <div class="content">
      <div class="summary">
        <a>Joe Henderson</a> posted on his page
        <div class="date">
          3 days ago
        </div>
      </div>
      <div class="extra text">
        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 5 Likes
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <img src="/images/avatar/small/justen.jpg">
    </div>
    <div class="content">
      <div class="summary">
        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
        <div class="date">
          4 days ago
        </div>
      </div>
      <div class="extra images">
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 41 Likes
        </a>
      </div>
    </div>
  </div>
</div> */}