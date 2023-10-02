import Button from "./button/Button";
import styles from "./navbar.module.css";

const iconsNavbar = [
    {
        id: "home",
        path: "/"
    },
    {
        id: "search",
        path: "/search"
    },
    {
        id: "addmovie",
        path: "/addmovie"
    },
    {
        id: "favourites",
        path: "/favourites"
    },
    {
        id: "profile",
        path: "/profile"
    }
]

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className={styles.container}>
            {iconsNavbar.map((icon, index) => (

                <Button icon={icon} index={index} />

            ))}

        </nav>
    )
}

export default Navbar