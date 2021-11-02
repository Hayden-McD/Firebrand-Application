import React from 'react';
import './css/App.css';
import NavigationBar from './components/navbarElements';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap'

//Pages
import Homepage from './Pages/aboutMe';
import MyStudy from './Pages/myStudy';
import Skills from './Pages/skills';
import What from './Pages/what';
import Why from './Pages/why';

function App() {
  return (
    <Router>

    <div className="App">

      <NavigationBar/>

      <Switch>
        <Container fluid={true} style={{ maxWidth: '85vw' }}>
          <Route exact path="/" component={Homepage}/>
          <Route path="/study" component={MyStudy}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/what" component={What}/>
          <Route exact path="/why" component={Why}/>
        </Container>
      </Switch>
    </div>

    </Router>
  );
};

export default App;