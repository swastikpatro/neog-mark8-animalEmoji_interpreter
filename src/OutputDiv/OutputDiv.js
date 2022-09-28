import "../App.css";
import "./OutputDiv.css";

const OutputDiv = ({ meaning, outputemoji }) => {
  return (
    <section
      style={{
        borderColor: meaning.includes("failed") ? "red" : "#fff",
      }}
      className="outputSection"
    >
      <p className="meaning">{meaning}</p>

      <p className="outputemoji">{outputemoji && `"${outputemoji}"`}</p>
    </section>
  );
};

export default OutputDiv;
