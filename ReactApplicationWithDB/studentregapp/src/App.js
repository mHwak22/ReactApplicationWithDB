import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StudentList from './Componets/StudentList';
import StudentAdd from './Componets/StudentAdd';
import StudentDetail from './Componets/StudentDetail';
import StudentLogin from './Componets/StudentLogin';
import StudentReg from './Componets/StudentReg';


function App() {
  return (
    <div>
      <Router>
        <Switch>
      <Route path="/" exact component={StudentList}></Route>
      <Route path="/Reg" component={StudentReg}></Route>
      <Route path="/Log" component={StudentLogin}></Route>
      <Route path="/Detail" component={StudentDetail}></Route>
      <Route path="/add" component={StudentAdd}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
