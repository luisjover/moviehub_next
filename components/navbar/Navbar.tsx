import Button from "./button/Button";
import styles from "./navbar.module.css";

const navbarPaths = ["/", "/favourites", "/addmovie", "/profile", "/api/auth/logout"]

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className={styles.container}>
            {navbarPaths.map((path, index) => (

                <Button
                    path={path}
                    index={index}
                />

            ))}

        </nav>
    )
}

export default Navbar