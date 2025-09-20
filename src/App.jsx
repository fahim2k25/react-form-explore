import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm'
import FormAction from './components/FormAction'
import ControlledForm from './components/ControlledForm'
import UnControlledForm from './components/UnControlledForm'
import HookForm from './components/HookForm'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Form starts here</h2>
      <h2>form-1 (SimpleForm)</h2>
      <SimpleForm></SimpleForm>
      <h2>form-2 (FormAction)</h2>
      <FormAction></FormAction>
      <h2>form-3 (Controlled Form)</h2>
      <ControlledForm></ControlledForm>
      <h2>form-4 (UnControlled FOrm)</h2>
      <UnControlledForm></UnControlledForm>
      <h2>form-5 (Hook Form)</h2>
      <HookForm></HookForm>
    </>
  )
}

export default App
