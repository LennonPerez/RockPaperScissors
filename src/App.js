import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import GameBonus from "./components/GameBonus";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Game} />
        <Route exact path={"/game-bonus"} component={GameBonus} />
      </Switch>
    </Router>
  );
}

export default App;
