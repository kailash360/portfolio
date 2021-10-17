import './static/App.css';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <Skills></Skills>
      <Experience></Experience>
    </>
  );
}

export default App;
