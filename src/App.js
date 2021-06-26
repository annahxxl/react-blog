// eslint-disable
import "./App.css";
import { useState } from "react";

function App() {
  let title = "리액트 블로그 만들기";
  let created = "Jun. 26, 2021";
  let [likes, setLikes] = useState(0);

  function increaseLikes() {
    setLikes(likes + 1);
  }

  return (
    <div className="App">
      <header>
        <div className="logo">Velog</div>
      </header>
      <div className="title">All</div>
      <div className="list-container">
        <div className="post">
          <div className="post__title">{title}</div>
          <div className="post__meta">
            <div className="created">Created at {created}</div>
            <div className="likes">
              <span onClick={increaseLikes}>❤</span> {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
