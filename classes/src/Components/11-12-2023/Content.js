const Content = (props) => {
  console.log(props);
  return (
    <section>
      <article>
        <p>Name = {props.userName}</p>
        <p>Address Line 1 = {JSON.stringify(props.completeAddress)}</p>
        <p>Mob No = {props.mobNo}</p>
        <p>Age = {props.age}</p>
        <p>Has License = {String(props.hasDrivingLicense)}</p>
        <p>Marks = {props.marks[0].science}</p>
      </article>
      <hr />
    </section>
  );
};

export default Content;
