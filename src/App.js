import React, { useState, useEffect } from "react";
import "./styles.css";
import SpreadSheet from "@rowsncolumns/spreadsheet";
import { produce } from "immer";

const initialSheets = [
  {
    name: "Sheet 1",
    id: "sheet1",
    cells: {}
  }
];
const App = () => {
  const [sheets, setSheets] = useState(initialSheets);
  useEffect(() => {
    const interval = setInterval(() => {
      setSheets((prev) => {
        // Immer
        return produce(prev, (draft) => {
          draft[0].cells[1] = draft[0].cells[1] ?? {};
          draft[0].cells[1][2] = {
            text: Math.random(),
            datatype: "number"
          };
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <SpreadSheet sheets={sheets} onChange={setSheets} />;
};

export default App;
