import './App.css';
import './responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
    <Header props={{collapsed, setCollapsed}}/>
    <Menu/>
    <Main props={{collapsed}}/>
    <Footer/>
    </>
  );
}

export default App;
