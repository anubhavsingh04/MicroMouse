import React, { useState } from "react";
import Grid from "./Grid";
import "./InputForm.css";

function InputForm() {
  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [showGrid, setShowGrid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowGrid(true);
  };

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  const handleColsChange = (event) => {
    setCols(event.target.value);
  };

  return (
    <>
    <div  
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: '#b9dced',
      }}
    >  <h1>Micromouse Assignment</h1>
      {!showGrid ? (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label>
            <b>Rows:</b>
            <input 
              required
              placeholder="Enter no of rows"
              min="0"
              type="number"
              value={rows}
              onChange={handleRowsChange}
              style={{
                marginLeft: "28px",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "5px",
                border: "2px solid grey",
                backgroundColor: "#d1d1d1",
              }}
            />
          </label>
          <br />
          <label>
            <b>Columns:</b>
            <input
              required
              placeholder="Enter no of columns"
              min="0"
              type="number"
              value={cols}
              onChange={handleColsChange}
              style={{
                marginLeft: "5px",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "5px",
                border: "2px solid grey",
                backgroundColor: "#d1d1d1",
              }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Show Grid
          </button>
        </form>
      ) : null}
      {showGrid && <Grid row={rows} col={cols}  setShowGrid={setShowGrid}/>}
    </div>
    </>
  );

}

export default InputForm;
