const ColorCard = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "20%",
        margin: "20px",
      }}
    >
      <div
        style={{
          height: "150px",
          background: props.colorCode,
        }}
      ></div>
      <h2>{props.colorCode}</h2>
      <span
        style={{
          color: props.colorCode,
        }}
      >
        {props.colorName}
      </span>
    </div>
  );
};

export default ColorCard;
