import { Fragment } from 'react';
import Header from './layout/Header';
import Section from './layout/Section';
import Article from './layout/Article';
import { Route, Routes } from 'react-router-dom';
import Reservation from './layout/Reservation';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Section />}>
          <Route path='/' element={<Article />} />
        </Route>
        <Route path='/reservation' element={<Reservation />} />
      </Route>
    </Routes>
  );
}
export default App;
