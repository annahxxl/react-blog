import { useHistory } from "react-router-dom";

function Write(props) {
  let history = useHistory();

  return (
    <div>
      <div className="category">Write</div>
      <div className="input">
        <input
          className="input__title"
          placeholder="제목을 입력하세요"
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
        <textarea
          className="input__content"
          onChange={(e) => {
            props.setContent(e.target.value);
          }}
        />
      </div>
      <div className="btn-container">
        <button
          className="back-btn"
          onClick={() => {
            history.goBack();
          }}
        >
          취소
        </button>
        <button
          className="upload-btn"
          onClick={() => {
            if (props.title === "" || props.content === "") {
              alert("내용을 입력해 주세요");
              return;
            }
            const today = new Date().toDateString().split(" ");
            props.setNewPost({
              title: props.title,
              content: props.content,
              created: `${today[1]}. ${today[2]}, ${today[3]}`,
              likes: 0,
            });
            history.goBack();
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default Write;
