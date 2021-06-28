import { useHistory, useParams } from "react-router-dom";

function Edit(props) {
  let { id } = useParams();
  let post = props.posts.find((post) => post.id === parseInt(id));
  let history = useHistory();

  if (!post) {
    history.push("/");
  }

  return (
    <div>
      <div className="category">Edit</div>
      <div className="input">
        <input
          className="input__title"
          value={post.title}
          onChange={() => {
            // 수정된 값 set 해주기
          }}
        />
        <textarea
          className="input__content"
          value={post.content}
          onChange={() => {
            // 수정된 값 set 해주기
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
            // 수정된 값 set 해주기
            history.goBack();
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
}

export default Edit;
