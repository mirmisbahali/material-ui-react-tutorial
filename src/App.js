import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

function CheckboxExample() {
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        color="primary"
        disabled
      />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
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
