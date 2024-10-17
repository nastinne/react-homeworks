import React from 'react';
import './App.css'; 

function App() {
  const tableData = [
    ['Row 1', 'Row 1', 'Row 1'],
    ['Row 2', 'Row 2', 'Row 2'],
    ['Row 3', 'Row 3', 'Row 3'],
    ['Row 4', 'Row 4', 'Row 4'],
  ];

  return (
    <div className="table-container">
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

