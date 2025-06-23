import './Taskcard.css'
function Taskcard({ task, delTask }) {
    const temp = (String(task.pending) === "true" ? 'pending' : 'done')
    return (
        <li className={`taskcard ${temp}`}>
            <span>{task.name}</span>
            <button className='delete' onClick={() => delTask(task.id)}>
                Delete
            </button>
        </li>
    );
}

export default Taskcard;