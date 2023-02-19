import "./global.css"
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <TaskList/>
      </div>
    </div>
  )
}

