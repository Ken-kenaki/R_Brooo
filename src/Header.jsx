function Header() {
    return (
        <header>
            <div className="logo">Craigslist</div>
            <nav className="nav-bar">
                <ul className="menu-container">
                    <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Community</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Services</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Jobs</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Housings</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Forums</a></li>
                </ul>
            </nav>

            <div className="icons-header">
                    <button className="post-button">Post an Ad</button>
            </div>
        </header>
    )
}

export default Header;