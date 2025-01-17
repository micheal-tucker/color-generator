import React from "react"

const Square = ({ colorValue, hexValue, isDarkText, setIDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#ffff",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

export default Square
