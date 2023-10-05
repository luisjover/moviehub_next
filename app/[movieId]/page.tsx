import styles from "./styles.module.css"

import BackButton from "@/components/BackButton/BackButton";
import { getMovieById } from "@/services/movies.services";
import Image from "next/image";
import { Metadata } from "next/types";


type Props = {
    params: {
        movieId: string
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const movie = await getMovieById(params.movieId)
    return {
        title: `${movie.title} Page`,
        description: movie.genresName,
    }
}

const MovieDetail = async ({ params }: Props) => {
    console.log(params.movieId)
    const movie = await getMovieById(params.movieId)
    console.log(movie)

    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <BackButton />
                <Image src={movie.cover_img} alt={movie.title} width={200} height={320} priority={true} />
                <h1>{movie.title}</h1>
                <h2>{movie.year}</h2>
                <h2>{movie.genresName}</h2>
            </div>
        </div>
    );
};
export default MovieDetail;
