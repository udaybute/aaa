// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coin from './pages/CoinPage';
import { makeStyles } from '@material-ui/core/styles';
import CoinPage from './pages/CoinPage';

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;