import './App.css';
import { Fragment } from 'react';
import Header from './layout/Header';
import Section from './layout/Section';
import Article from './layout/Article';

function App() {
  return (
      <Fragment>
          <Header/>
          <Section/>
          <Article/>
      </Fragment>
  );
}

export default App;
