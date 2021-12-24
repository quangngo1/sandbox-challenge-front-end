import './App.css';
import HomePage from './components/HomePage';
import PlayersList from './components/PlayersList';
import GamesList from './components/GamesList';
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from "react-router";
import PlayerDetail from './components/PlayerDetail';
import GameDetail from './components/GameDetail';
import NewPlayer from './components/NewPlayer';
import NewGame from './components/NewGame';
import CreatePlayer from "./components/NewGame/CreatePlayer";
import {createStore} from "redux";
import gameReducer from './reducers/game';
import {Provider} from "react-redux";

const store = createStore(gameReducer);

function App() {
  return (
      <Provider store={store}>
        <div className="container-fluid">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>

              <Route path="/players" exact={true} element={<PlayersList/>}/>
              <Route path="/players/:playerId" exact={true}
                     element={<PlayerDetail/>}/>
              <Route path="/players/newPlayer" exact={true}
                     element={<NewPlayer/>}/>

              <Route path="/games" exact={true} element={<GamesList/>}/>
              <Route path="/games/:gameId" exact={true}
                     element={<GameDetail/>}/>
              <Route path="/games/newGame" exact={true} element={<NewGame/>}/>
              <Route path="/createNewGame/:numPlayers" exact={true}
                     element={<CreatePlayer/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
