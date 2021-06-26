// eslint-disable
import "./App.css";
import { useState } from "react";

function App() {
  let title = "리액트 블로그 만들기";
  let created = "Jun. 26, 2021";
  let [likes, setLikes] = useState(0);
  let content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="logo">Velog</div>
      </header>

      <div className="title">All</div>

      <div className="list-container">
        <Posts
          title={title}
          created={created}
          likes={likes}
          setLikes={setLikes}
          setModalStatus={setModalStatus}
        ></Posts>
      </div>
      {modalStatus ? (
        <Modal
          title={title}
          created={created}
          content={content}
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
          props.setModalStatus(true);
        }}
      >
        {props.title}
      </div>
      <div className="post__meta">
        <div className="created">Created at {props.created}</div>
        <div className="likes">
          <span
            onClick={() => {
              props.setLikes(props.likes + 1);
            }}
          >
            ❤
          </span>{" "}
          {props.likes}
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
        <div className="modal__created">{props.created}</div>
        <div className="modal__title">{props.title}</div>
        <div className="modal__content">{props.content}</div>
      </div>
    </div>
  );
}

export default App;
