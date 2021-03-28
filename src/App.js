import DaysList from './components/DaysList'
import Day from './components/Day'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CreateWord from './components/CreateWord'
import CreateDay from './components/CreateDay'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <DaysList />
        </Route>
        <Route path="/day/:day">
          <Day />
        </Route>
        <Route path="/create_word">
          <CreateWord />
        </Route>
        <Route path="/create_day">
          <CreateDay />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
