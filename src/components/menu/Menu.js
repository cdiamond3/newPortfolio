import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}> 
                    <a href="#intro"> Home </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio2"> MINT </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio"> Road Map </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works"> Rares & 1:1 </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials"> The Team </a>
                </li>
            </ul>
            
        </div>
    )
}
