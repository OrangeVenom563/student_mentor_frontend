import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/header.component';
import StudentPage from './pages/student/student-page.component';
import MentorPage from './pages/mentor/mentor-page.component';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
    <Route path="/student" component={StudentPage}/>
    <Route path="/mentor" component={MentorPage}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
