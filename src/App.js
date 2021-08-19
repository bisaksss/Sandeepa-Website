import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
function App() {
  return (

   
    <div >

      <Router>
        <Switch>

        <Route exact path = "/" component = {Home} />
          
     

        <Route  path = "/watch" component = {Watch} />


        <Route  path = "/register" component = {Register} />



        </Switch>
      </Router>
     
     
    </div>
   
  );
}

export default App;
