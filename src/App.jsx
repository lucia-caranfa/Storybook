
import Button from './components/Button'
import './App.css'
import ColumnsGrid from './components/ResponsiveGrid'
import ResponsiveGrid from './components/Grilla'
import Likes from './components/Contador'
import Cambiador from './components/Contador2'
import Cambiador2 from './components/Contador3'

function App() {

  return (
    <>
      <Button children='Soy un botón base'/>
      <Button 
      children='Soy un botón 1'
      type='primary'
      />
      <Button 
      children='Soy un botón 2'
      type='secondary'
      />
      <Button 
      children='Soy un botón 3'
      type='tertiary'
      />
      <br/>
      <br/>
      <br/>
      <hr />
      <ColumnsGrid/>
      <br/>
      <br/>
      <br/>
      <hr />
      <br/>
      <br/>
      <br/>
      <ResponsiveGrid/>
      <br/>
      <br/>
      <br/>
      <hr />
      <Likes/>
      <br/>
      <br/>
      <br/>
      <hr />
      <Cambiador/>
      <br/>
      <br/>
      <br/>
      <hr />
      <Cambiador2/>
    </>
  )
}

export default App
