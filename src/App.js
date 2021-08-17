import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
function App() {
  return (

   
    <div >

      <Router>
        <Switch>

        <Route exact path = "/" component = {Home} />
          
     

        <Route  path = "/watch" component = {Watch} />



        </Switch>
      </Router>
     
     
    </div>
   
  );
}

export default App;
