
import SearchPage from './containers/SearchPage';

import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserPage from './containers/UserPage';




function App() {


  return (
    <BrowserRouter>


    <Routes>
      <Route path="/" element= {<SearchPage/>}/>
      <Route path="/:login" element= {<UserPage/>}/>
      <Route path="/*" element= {<SearchPage/>}/>
    </Routes>

    </BrowserRouter>

  );
}

export default App;

