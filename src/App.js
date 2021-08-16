import { Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Giphy, Jsonbin } from "./pages"
import "./App.css";

library.add(faCheck, faTimes);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Giphy} />
      <Route exact path="/giphy" component={Giphy} />
      <Route exact path="/jsonbin" component={Jsonbin} />
    </Switch>
  );
}

export default App;