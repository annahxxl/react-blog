// eslint-disable
import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  let [posts, setPosts] = useState(data);
  let [modalStatus, setModalStatus] = useState(false);
  let [postIdx, setPostIdx] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logo">Velog</div>
      </header>
      <div className="category">All</div>
      <div className="list-container">
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              post={post}
              posts={posts}
              postIdx={index}
              setPosts={setPosts}
              setPostIdx={setPostIdx}
              setModalStatus={setModalStatus}
            ></Post>
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

function Post(props) {
  return (
    <div className="post">
      <div
        className="post__title"
        onClick={() => {
          props.setPostIdx(props.postIdx);
          props.setModalStatus(true);
        }}
      >
        {props.post.title}
      </div>
      <div className="post__meta">
        <div className="created">Created at {props.post.created}</div>
        <div className="likes">
          <span
            onClick={() => {
              let newPosts = [...props.posts];
              newPosts[props.postIdx].likes += 1;
              props.setPosts(newPosts);
            }}
          >
            ❤&nbsp;
          </span>
          {props.post.likes}
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal-container">
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
