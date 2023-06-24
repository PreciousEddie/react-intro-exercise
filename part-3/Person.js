const MAX_NAME_LENGTH_TO_SHOW = 6;

const Person = (props) => {
  let reply;
  if (props.age < 18) {
    reply = "You must be 18 to vote.";
  } else {
    reply = "Please go vote!!";
  }

  return (
    <div>
      <p>Learn some information about this person.</p>
      <span>{props.name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}, </span>
      <span>{props.age}</span>
      <h3>{reply}</h3>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
