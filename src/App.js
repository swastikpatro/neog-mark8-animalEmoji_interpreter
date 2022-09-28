import Heading from "./Heading/Heading.js";
import Main from "./Main/Main.js";
import "./App.css";

export const emojiDictionary = {
  "🐵": "monkey",
  "🐶": "dog",
  "🦊": "fox",
  "🦝": "raccoon",
  "🦁": "lion",
  "🐯": "tiger",
  "🐮": "cow",
  "🐘": "elephant",
  "🐼": "panda",
  "🐴": "horse",
};

export default function App() {
  return (
    <div className="App">
      <Heading>animal emoji interpreter</Heading>
      <Main />
    </div>
  );
}
