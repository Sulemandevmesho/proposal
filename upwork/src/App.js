import './App.css';
import 'cors'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path='/home' element={<HomeScreen/>} />
          <Route exact path='/login' element={<LoginScreen/>} />
          <Route exact path='/signup' element={<SignupScreen/>} />
          <Route exact path='/' element={<SignupScreen/>} />
        </Routes>
      </main>
    </Router>
    
  );
}

export default App;
