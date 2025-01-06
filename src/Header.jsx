function Header() {
    return (
        <header>
            <div className="logo">LOGO</div>
            <nav className="menu-container">
                <ul className="menu">
                    <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">About</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Services</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}

export default Header;