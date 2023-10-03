
import Link from "next/link";
import styles from "./settingsmenu.module.css";

type Props = {}

const SettingsMenu = (props: Props) => {
    return (
        <nav className={styles.container}>
            <span >Language</span>
            <Link href="/api/auth/logout">Logout</Link>
        </nav>
    )
}

export default SettingsMenu;