import styles from "./button.module.css";
import { BiHomeAlt2, BiSearch, BiSolidHeart } from 'react-icons/bi';
import { MdLibraryAdd } from 'react-icons/md';
// import { Icon } from '@iconify/react';

type IconType = {
    id: string,
    path: string
}

type Props = {
    icon: IconType,
    index: number
}

const Button = ({ icon, index }: Props) => {
    return (
        <div className={styles.container}>
            <input id={icon.id} name="icon-navbar-bottom" type="radio" className={styles.input} />
            <label htmlFor={icon.id} className={styles.label}>
                {index === 0 && <BiHomeAlt2 className={styles.icon} />}
                {index === 1 && <BiSearch className={styles.icon} />}
                {index === 2 && <MdLibraryAdd className={styles.icon} />}
                {index === 3 && <BiSolidHeart className={styles.icon} />}
                {index === 4 && <BiSolidHeart className={styles.icon} />}

            </label>
        </div>
    )
}

export default Button;