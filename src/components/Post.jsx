import React from "react";
import "./Post.css";
const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  // return (
  //   <div className="post-container">
  //     <img className="image" src={imgUrl} alt="post" />
  //     <h1 className="heading">{title}</h1>
  //     {body}
  //     <div className="info">
  //       <h4>Written by: {author}</h4>
  //     </div>
  //   </div>
  // );
  if (index % 2 === 1) {
    return (
      <div className="row">
        <div className="col">
          <img className="image" src={imgUrl} alt="post" />
        </div>
        <div className="col">
          <div className="text">
            <h1 className="heading">{title}</h1>
            {body}
            <div className="info">
              <h4>Written by: {author}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col">
          <div className="text">
            <h1 className="heading">{title}</h1>
            {body}
            <div className="info">
              <h4>Written by: {author}</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="image" src={imgUrl} alt="post" />
        </div>
      </div>
    );
  }
};

export default Post;
