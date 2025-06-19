import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authenthication/authentication.component.jsx";

const App = () => {
  const Help = () => {
    return(
      <div>I want a way out of loneliness</div>
    )
  }

  return (  
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Help/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;