"use client"

import styles from "./backButton.module.css"
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    return (
        <button className={styles.button} onClick={() => router.back()}>Go back</button>
    );
};
export default BackButton;
