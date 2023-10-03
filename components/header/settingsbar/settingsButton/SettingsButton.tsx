"use client";

import styles from "./settingsButton.module.css";
import { useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import SettingsMenu from "../settingsmenu/SettingsMenu";

type Props = {}

const SettingsButton = (props: Props) => {

    const [settingsExpanded, setSettingsExpanded] = useState(false)

    const handleToggleSettingsMenu = () => {
        setSettingsExpanded(!settingsExpanded)
    }

    return (
        <>
            <span onClick={handleToggleSettingsMenu}>
                <IoSettingsSharp className={styles.icon} />
            </span>
            {settingsExpanded ?
                <SettingsMenu />
                :
                <></>}
        </>

    )
}

export default SettingsButton;