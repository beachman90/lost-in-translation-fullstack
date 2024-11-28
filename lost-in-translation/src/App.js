import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/Home';
import Translate from './pages/Translation';
import Profile from './pages/Profile';
import CheckAuth from './pages/CheckAuth';

function App() {
  return (
    <Router>
      <div>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={
            <CheckAuth requiresAuth={false} failedRoute="/translate">
              <Home />
            </CheckAuth>} />
          <Route path="/translate" element={
            <CheckAuth requiresAuth={true} failedRoute="/">
              <Translate />
            </CheckAuth>} />
          <Route path="/profile" element={
            <CheckAuth requiresAuth={true} failedRoute="/">
              <Profile />
            </CheckAuth>} />
        </Routes>
      </Provider>
      </div>
    </Router>
  );
}

export default App;
