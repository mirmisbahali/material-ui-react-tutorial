import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup color="secondary">
          <Button
            startIcon={<SaveIcon />}
            size="large"
            variant="contained"
            color="primary"
          >
            Save
            </Button>
            <Button
            startIcon={<DeleteIcon />}
            size="large"
            variant="contained"
          >
            Discard
            </Button>
          
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
