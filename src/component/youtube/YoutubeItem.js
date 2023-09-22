import React from "react";

export const YouTubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt=""></img>

        <div className="youtube-footer">
          <img className="youtube-avatar" alt="" src={props.avatar}></img>

          <div className="youtube-info">
            <h3 className="youtube-title">{props.title || "No title"}</h3>

            <h4 className="youtube-author">
              {props.author || "Anonymous User"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
