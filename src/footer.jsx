function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    Footer Left
                    
                </div>
                <div className="footer-right">
                    Footer Right
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>

        </footer>
    )
};

export default Footer;