import './CalcForm.css';

const CalculatorUseReducer = () => {
  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input className="form-input" type="number" id="number1" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input className="form-input" type="number" id="number2" />
        </div>
        <button className="form-button">Add</button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input className="form-input" type="number" id="result" />
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
