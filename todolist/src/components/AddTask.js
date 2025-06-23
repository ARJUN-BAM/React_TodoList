import './AddTask.css'
import { useState } from 'react'
export default function AddTask({ tasks, updateTasks, progress, upProgress, setShowCaution }) {
    const [taskD, upTaskD] = useState("");

    function setProgress(e) {
        // console.log(e.target.value)
        upProgress(e.target.value);
    }


    function input(e) {
        upTaskD(e.target.value)
    }


    function resetClick() {
        upTaskD("")
    }


    function newTask(e) {
        e.preventDefault();
        console.log(taskD.length)
        if (taskD === '' || taskD.length > 45) {
            resetClick();
            setShowCaution(true);
            setTimeout(() => setShowCaution(false), 3000);
            return
        }
        const task = {
            "name": taskD,
            "id": Math.random() * 1000,
            "pending": progress
        }
        updateTasks([...tasks, task])
        resetClick();
        console.log(task)
    }

    function handleNewTask(e) {
        if (e.key === 'Enter') {
            newTask(e);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            let status = "";
            if (e.key === 'ArrowUp') {
                status = "true";
            } else {
                status = "false"
            }
            upProgress(status);
        }
    }
    return (
        <section className='addtask'>
            <input onChange={input} className='addingTask' type='text' name='task' id='task' value={taskD} onKeyDown={handleNewTask} placeholder='Add a Task' autoComplete='off' />
            <select onChange={setProgress}>
                <option value={true}>Pending</option>
                <option value={false}>Done</option>
            </select>
            <button onClick={resetClick} className='delete'>Reset</button>
            <button onClick={newTask}  >Add</button>
        </section>
    )
}
