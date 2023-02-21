import { Link } from "react-router-dom";

export function Navigation() {
    return(<nav>
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="about">About</Link>
        <Link target='#' to="https://github.com/3782291211">Github</Link>
    </nav>)
};