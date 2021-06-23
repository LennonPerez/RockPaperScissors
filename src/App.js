import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./pages/Game";
import GameBonus from "./pages/GameBonus";
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
