
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "@/public/assets/images/app-logo.png";
import SettingsButton from "./settingsbar/settingsButton/SettingsButton";

type Props = {}

const Header = (props: Props) => {
    return (
        <div className={styles.container}>
            <Image className={styles.logo} src={Logo} alt="application logo" priority={true} />

        </div>
    )
}

export default Header;