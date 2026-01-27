import React, { Component } from "react";
import "./show.css";

class ShowBio extends Component {
  constructor() {
    super();
    this.state = {
      bio: null,
    };
  }

  render() {
    const handleClick = () => {
      this.setState((prevState) => ({
        bio: !prevState.bio,
      }));
    };
    const user = [
      {
        name: "Jane Doe",
        bio: "Frontend developer who loves React and coffee ☕️",
        image:
          "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
      },
    ];
    return (
      <section className="container">
        <div className="card_container">
          {user?.map(({ name, bio, image }, i) => {
            return (
              <div key={i} className="image_box">
                <img className="image_" src={image} rel="profile_photo" />
                <h3 className="fnt">{name}</h3>
                <button onClick={handleClick} className="btn">
                  {this.state.bio ? "Hide Bio" : "Show Bio"}
                </button>
                 <p className='para__'>{this.state.bio ? bio : ""}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default ShowBio;
