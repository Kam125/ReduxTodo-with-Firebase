import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <ToastContainer/>
        <NavBar/>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
