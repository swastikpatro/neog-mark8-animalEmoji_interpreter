import { emojiDictionary } from "../App.js";
import SingleEmojiBtn from "../SingleEmojiBtn/SingleEmojiBtn.js";
import "../App.css";
import "./BtnContainer.css";

const BtnContainer = ({ handleBtnContainerClick }) => {
  return (
    <section
      className="btncontainer"
      onClick={(e) => handleBtnContainerClick(e)}
    >
      {Object.keys(emojiDictionary).map((emoji, i) => {
        return <SingleEmojiBtn key={i}>{emoji}</SingleEmojiBtn>;
      })}
    </section>
  );
};

export default BtnContainer;
