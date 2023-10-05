
import styles from "./profileChart.module.css";
import { UserType } from '@/types/users';
import Image from 'next/image';

type Props = {
    user: UserType,
    picture: string
}

const ProfileChart = ({ user, picture }: Props) => {
    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>

                <Image className={styles.picture} src={picture} alt={`${user.name} profile picture`} height={160} width={160} priority={true} />

                <h1>{user.name}</h1>
                <h2>{`Movies saved: ${user.movies.length}`}</h2>

            </div>
        </div>
    )
}

export default ProfileChart