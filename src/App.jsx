
import Button from './components/Button'
import './App.css'

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
    </>
  )
}

export default App
