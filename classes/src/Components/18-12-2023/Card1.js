const Card1 = (props) => {
  // console.log(props);
  const onIncreaseButtonClick = () => {
    props.increaseCounter("ABCD");
  };
  return (
    <div style={{ border: "2px solid black", margin: "20px" }}>
      Card1 Component
      <button onClick={props.onIncreaseButtonClick}>Increase Value</button>
    </div>
  );
};

export default Card1;
