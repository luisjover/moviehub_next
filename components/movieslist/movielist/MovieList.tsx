
import MovieCard from "../moviecard/MovieCard";
import styles from "./movieList.module.css";
import { getUserByEmail } from "@/services/users.services";

type Props = {
    userEmail: string,
}

const MoviesList = async ({ userEmail }: Props) => {

    const user = await getUserByEmail(userEmail);
    console.log(user);

    return (

        <div className={styles.container}>
            {user?.movies && user?.movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
            <div className={styles.whitespace}></div>

        </div>


    )
}

export default MoviesList