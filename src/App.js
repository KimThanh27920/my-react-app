import "./App.css";
// import Button from "./component/button/Button";
import CardList from "./component/card/CardList";
// import Toggle from "./component/state/Toggle";
// import Game from "./component/tictactoe/Game";
// import GameReduder from "./component/tictactoeusereducer/GameReducer";
// import YoutubeList from "./component/youtube/YoutubeList";

// Parent  component
function App() {
  return (
    <div>
      {/* session 1 */}
      {/* <h1>Youtube List</h1>
      <YoutubeList>
        <p>
          I’m a designer and hobby photographer.Feel free to donate if you find
          my images useful!
        </p>
      </YoutubeList> */}

      {/* Session 2 */}
      {/* <Toggle></Toggle> */}

      {/* Session 3 */}
      {/* <Game></Game> */}

      {/* Session 4 */}
      {/* <GameReduder></GameReduder> */}

      {/* Use sass */}
      {/* <Button>Primary</Button>
      <Button className="button--secondary">Secondary</Button> */}

      {/* Card */}
      <CardList></CardList>
    </div>
  );
}

export default App;
