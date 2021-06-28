// eslint-disable
import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { data } from "./data";
import Write from "./Write";

function App() {
  let [posts, setPosts] = useState(data);
  let [modalState, setModalState] = useState(false);
  let [postIdx, setPostIdx] = useState(0);

  // 게시글 input value
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [newPost, setNewPost] = useState(null);

  useEffect(() => {
    if (!newPost) return;
    let newPosts = [...posts];
    newPosts.unshift(newPost);
    setPosts(newPosts);
    setTitle("");
    setContent("");
  }, [newPost]);

  return (
    <div className="App">
      <header>
        <Link to="/" className="logo">
          Velog
        </Link>
        <Link to="/write" className="write-btn">
          Write
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <div className="category">All</div>
          <div className="list-container">
            {posts.map((post, index) => {
              return (
                <Post
                  key={index}
                  post={post}
                  posts={posts}
                  setPosts={setPosts}
                  postIdx={index}
                  setPostIdx={setPostIdx}
                  setModalState={setModalState}
                ></Post>
              );
            })}
            {modalState ? (
              <Modal
                posts={posts}
                postIdx={postIdx}
                setModalState={setModalState}
              ></Modal>
            ) : null}
          </div>
        </Route>
        <Route path="/write">
          <Write
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            newPost={newPost}
            setNewPost={setNewPost}
          ></Write>
        </Route>
      </Switch>
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
          props.setModalState(true);
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
            props.setModalState(false);
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
