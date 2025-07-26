import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authenthication/authentication.component.jsx";
import Shop from './routes/shop/shop-component.jsx';
import { ProductProvider } from './contexts/product.contexts';

const App = () => {

  return (  
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="auth" element={<Authentication/>}/>
        </Route>
      </Routes>
    </ProductProvider>
  );
};

export default App;