import OutputDiv from "../OutputDiv/OutputDiv.js";
import Form from "../Form/Form.js";
import BtnContainer from "../BtnContainer/BtnContainer.js";
import { emojiDictionary } from "../App.js";
import { useState } from "react";
import "../App.css";
import "./Main.css";

const Main = () => {
  const defaultText = "translation will appear here...";

  const [output, setOutput] = useState({
    outputEmoji: "",
    outputEmojiMeaning: defaultText,
  });
  const [inputText, setInputText] = useState("");

  // console.log(output);
  function handleChange(e) {
    const rawInput = e.target.value;
    const trimmedInput = e.target.value.trim();
    setOutput((prev) => ({
      ...prev,
      outputEmoji: rawInput,
    }));
    setInputText(rawInput);

    if (!rawInput) {
      setOutput((prev) => ({ ...prev, outputEmojiMeaning: defaultText }));
      return;
    }
    if (`${trimmedInput}` in emojiDictionary) {
      setOutput((prev) => ({
        ...prev,
        outputEmojiMeaning: emojiDictionary[trimmedInput],
      }));
    } else {
      setOutput((prev) => ({
        ...prev,
        // outputEmoji: rawInput,
        outputEmojiMeaning: "failed to recognize this emoji",
      }));
    }
  }

  function handleClick(e) {
    const btnText = e.target.innerText;
    if (!("btn" in e.target.dataset)) {
      return;
    }
    setOutput((prev) => ({
      ...prev,
      outputEmoji: btnText,
      outputEmojiMeaning: emojiDictionary[btnText],
    }));
    setInputText("");
  }

  function setDefault() {
    setOutput({
      outputEmoji: "",
      outputEmojiMeaning: defaultText,
    });
    setInputText("");
  }

  function handleRefresh() {
    setDefault();
  }

  return (
    <>
      <Form
        inputVal={inputText}
        handleInputChange={handleChange}
        handleRefreshClick={handleRefresh}
      />

      <OutputDiv
        meaning={output.outputEmojiMeaning}
        outputemoji={output.outputEmoji}
      />

      {/* Event Delegation */}
      <BtnContainer handleBtnContainerClick={handleClick} />
    </>
  );
};

export default Main;
