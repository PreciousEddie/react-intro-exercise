const App = () => {
  return (
    <div className="tweet-wrap">
      <Tweet
        username="PreciousEddie"
        name="Eddie"
        date=". Sep 14"
        message="I really like learning React!!"
      />
      <Tweet
        username="LovelyLauren"
        name="Lauren"
        date=". May 16"
        message="React is radical!!"
      />
      <Tweet
        username="BabyBaileyTheDog"
        name="Bailey"
        date=". Jun 24"
        message="Squirrel!!!!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
