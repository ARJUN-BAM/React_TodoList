import './App.css';
import Header from "./components/Header"
import Tasklist from "./components/Tasklist"
import Footer from "./components/Footer"
import AddTask from "./components/AddTask"
import Caution from "./components/Caution"
import { useState } from 'react';

function App() {
  const [tasks, updateTasks] = useState([]
  )
  const [showCaution, setShowCaution] = useState(false);
  const [progress, upProgress] = useState(true);
  function delTask(id) {
    updateTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <section className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} updateTasks={updateTasks} progress={progress} upProgress={upProgress} showCaution={showCaution} setShowCaution={setShowCaution} />
        <Tasklist tasks={tasks} delTask={delTask} progress={progress} />
      </main>
      {showCaution && <Caution />}
      <Footer />
    </section>
  );
}

export default App;
