import React from "react";
import { YouTubeItem } from "./YoutubeItem";
import { YoutubeData } from "./data";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => (
        <YouTubeItem
          key={item.id}
          image={item.image}
          title={item.title}
          author={item.author}
          avatar={item.avatar}
        ></YouTubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
