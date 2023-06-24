const App = () => (
  <div>
    <Person
      name="Eddie"
      age={37}
      hobbies={["Video Games", "Coding", "Comics", "Movies", "Anime"]}
    />
    <Person
      name="Lauren"
      age={37}
      hobbies={["Playing Overcooked", "Reading", "Sudoku"]}
    />
    <Person
      name="Bailey"
      age={3}
      hobbies={[
        "Chasing rabbits and squirrels",
        "Lounging in the sun",
        "Licking faces",
      ]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
