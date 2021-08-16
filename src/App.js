import "./App.css";
import { Giphy, Jsonbin } from "./pages"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes);

function App() {
  return (
    <div>
      {/* <Giphy /> */}
      <Jsonbin />
    </div>
  );
}

export default App;