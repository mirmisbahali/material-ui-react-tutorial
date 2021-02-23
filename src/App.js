import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button startIcon={<PhotoCamera />} href="https://google.com" target="_blank" variant="contained" color="primary">Hello World</Button>
        <IconButton>
          <PhotoCamera />
        </IconButton>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
