import "../css/style.css";
const Header = () => {
    return (
        <nav>
            <h1 class="logo">Festivalist</h1>
            <ul>
                <li><a href="#">Event</a></li>
            </ul>
            <button type="button" style="display: flex; align-items:center; justify-content: center; gap: 10px;">Admin</button>
        </nav>
    );
}

export default Header