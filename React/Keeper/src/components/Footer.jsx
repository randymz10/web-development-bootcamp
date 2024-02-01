const Footer = () => {
    const currentDate = new Date().getFullYear();
    return <footer>
        <p>&copy;Copyright {currentDate} </p>
    </footer>
};

export default Footer;