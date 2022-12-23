import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={ <Login/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
