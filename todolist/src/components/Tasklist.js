import './Tasklist.css'
import Taskcard from './Taskcard'
import { useState } from 'react';
export default function Tasklist({ tasks, delTask, progress }) {
    // console.log(tasks);
    const [vis, upVis] = useState(true);

    function hideList() {
        upVis(!vis);
    }

    return (
        <section className="tasklist">
            <div>
                <h1>TaskList</h1>
                <button onClick={hideList} className='hide'>Hide</button>
            </div>
            <ul>
                {vis && tasks.map((task) => (
                    <Taskcard progress={progress} task={task} key={task.id} delTask={delTask} />
                ))
                }
            </ul>

        </section>
    )
}
