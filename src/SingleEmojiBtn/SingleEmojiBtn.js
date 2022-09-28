import "../App.css";
import "./SingleEmojiBtn.css";

const SingleEmojiBtn = ({ index, children }) => {
  return (
    <span className="emojiBtn" data-btn key={index}>
      {children}
    </span>
  );
};

export default SingleEmojiBtn;
