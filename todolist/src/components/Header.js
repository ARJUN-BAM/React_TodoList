import './Header.css'
import Logo from '../assets/Logo.png';
export default function Header() {
    return (
        <section className="header">
            <img src={Logo} alt='Logo_Image' />
            <h1>ToDoList</h1>
        </section>
    )
}
