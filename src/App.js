import './App.css';
// import moment from 'moment';
// import About from './component/About/About';
// import Service from './component/Service/Service';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home/Home';
import UserList from './component/UserList/UserList';
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
function app() {

  // let today = new Date();

  return (
    // <div className="App">
    //   < h1 > Hello Satpal {moment(today).format('YYYY-MM-DD')}</h1 >
    //   <About />
    //   <Service />
    // </div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/user-list' element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default app;
