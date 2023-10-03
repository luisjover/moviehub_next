"use client";

import styles from "./button.module.css";
import Link from "next/link";
import { BiHomeAlt2, BiSearch, BiSolidHeart } from 'react-icons/bi';
import { MdLibraryAdd } from 'react-icons/md';
import { GiMonsterGrasp, Gi3DGlasses } from "react-icons/gi";
import { usePathname } from "next/navigation";
// import { Icon } from '@iconify/react';


type Props = {
    path: string,
    index: number
}

const Button = ({ path, index }: Props) => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>


            {index === 0 &&
                <Link href={path}>
                    <BiHomeAlt2 className={`${styles.icon} ${pathname === path ? styles.checked : ""}`} />
                </Link>
            }
            {index === 1 &&
                <Link href={path}>
                    <Gi3DGlasses className={`${styles.icon} ${pathname === path ? styles.checked : ""}`} />
                </Link>
            }
            {index === 2 &&
                <Link href={path}>
                    <MdLibraryAdd className={`${styles.icon} ${pathname === path ? styles.checked : ""}`} />
                </Link>
            }
            {index === 3 &&
                <Link href={path}>
                    <BiSolidHeart className={`${styles.icon} ${pathname === path ? styles.checked : ""}`} />
                </Link>
            }
            {index === 4 &&
                <Link href={path}>
                    <GiMonsterGrasp className={`${styles.icon} ${pathname === path ? styles.checked : ""}`} />
                </Link>
            }


        </div>
    )
}

export default Button;