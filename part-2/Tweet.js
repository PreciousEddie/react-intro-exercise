const Tweet = (props) => {
  return (
    <div className="tweet">
      <div className="tweet-info">
        {props.name}
        <span>@{props.username}</span>
        <span>{props.date}</span>
        <p>{props.message}</p>
      </div>
    </div>
  );
};
