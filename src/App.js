import React, { useState } from "react";
import logo from './HackerRank_Icon-1000px.png'; // Importing the image

function ItemListManager() {
  const [items, setItems] = useState([]); // State for the list of items
  const [inputValue, setInputValue] = useState(""); // State for the input field value

  // Function to handle adding items
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add the input value to the list
      setInputValue(""); // Clear the input field
    }
  };

  const commonStyle = {
    padding: "15px", // Same padding for both input and button
    width: "100%", // Full width for both input and button
    maxWidth: "300px", // Maximum width for both input and button
    borderRadius: "5px", // Same border radius for both input and button
    border: "1px solid #ccc", // Same border style for both input and button
    marginBottom: "10px", // Margin between input/button and the list
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2f2f2f", // Dark grey close to black
          padding: "20px",
        }}
      >
        <img
          src={logo} // Use imported logo here
          alt="HackerRank Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0, color: "green", fontSize: "24px" }}>
          Item List Manager
        </h1>
      </header>

      {/* Body Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Item List heading */}
        <h2 style={{ color: "black", fontWeight: "bold" }}>Item List</h2>

        {/* Input Section */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          style={commonStyle} // Apply common style to input
        />
        <br />
        {/* Add Item Button */}
        <button
          onClick={addItem}
          style={{
            ...commonStyle, // Apply common style to button
            backgroundColor: "green", // Button specific style (green background)
            color: "white", // Button text color
            cursor: "pointer", // Button cursor style
            marginTop: "10px", // Space between the input and button
          }}
        >
          Add Item
        </button>

        {/* List Section */}
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "10px",
                margin: "5px auto",
                width: "100%", // Full width for list items
                maxWidth: "300px", // Maximum width for list items
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;
