import "../App.css";
import "./Form.css";

const Form = ({ inputVal, handleInputChange, handleRefreshClick }) => {
  return (
    <form name="form">
      <div className="formSearch">
        <label htmlFor="data">Enter emoji:</label>
        <input
          placeholder="type emoji"
          autoComplete="off"
          id="data"
          onChange={handleInputChange}
          value={inputVal}
        />
      </div>
      <span className="refreshBtn" onClick={() => handleRefreshClick()}>
        <i className="fa-solid fa-arrows-rotate"></i>
      </span>
    </form>
  );
};

export default Form;
