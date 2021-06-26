// eslint-disable
import { useState } from "react";
import "./App.css";
import { posts } from "./data";

function App() {
  let [likes, setLikes] = useState(posts.map((post) => post.likes));
  let [modalStatus, setModalStatus] = useState(false);
  let [postIdx, setPostIdx] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logo">Velog</div>
      </header>

      <div className="title">All</div>

      <div className="list-container">
        {posts.map((post, index) => {
          return (
            <Posts
              postIdx={index}
              posts={posts}
              likes={likes}
              setLikes={setLikes}
              setModalStatus={setModalStatus}
              setPostIdx={setPostIdx}
            ></Posts>
          );
        })}
      </div>
      {modalStatus ? (
        <Modal
          posts={posts}
          postIdx={postIdx}
          setModalStatus={setModalStatus}
        ></Modal>
      ) : null}
    </div>
  );
}

function Posts(props) {
  return (
    <div className="post">
      <div
        className="post__title"
        onClick={() => {
          props.setPostIdx(props.postIdx);
          props.setModalStatus(true);
        }}
      >
        {props.posts[props.postIdx].title}
      </div>
      <div className="post__meta">
        <div className="created">
          Created at {props.posts[props.postIdx].created}
        </div>
        <div className="likes">
          <span
            onClick={() => {
              let newLikes = [...props.likes];
              newLikes[props.postIdx] += 1;
              props.setLikes(newLikes);
            }}
          >
            ❤
          </span>
          {props.likes[props.postIdx]}
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal-container hidden">
      <div className="modal">
        <div
          className="modal__btn--close"
          onClick={() => {
            props.setModalStatus(false);
          }}
        >
          닫기
        </div>
        <div className="modal__created">
          {props.posts[props.postIdx].created}
        </div>
        <div className="modal__title">{props.posts[props.postIdx].title}</div>
        <div className="modal__content">
          {props.posts[props.postIdx].content}
        </div>
      </div>
    </div>
  );
}

export default App;
