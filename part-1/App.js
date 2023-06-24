const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Eddie" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
