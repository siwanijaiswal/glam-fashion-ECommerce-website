import Home from './routes/home/home';
import { Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation'
import Authentication from './routes/authentication/authentication';

//nested routing i.e /home/shop
const Shop=()=>{
  return(
    <h1>
  Hey! I am a shop page.
    </h1>
  )
}

const App=()=>{
  return (
    <Routes> 
      {/* /home/shop , to have this type of nesting we need to use outlet in home component page, 
      this is the typeof nesting inside homepage*/}
      
      <Route path='/' element={<Navigation />}>
      <Route index element={ <Home />}/>
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
