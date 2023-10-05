"use client";

import styles from "./movieCard.module.css";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { GiCrossMark } from "react-icons/gi";
import { LuExpand } from "react-icons/lu";
import Modal from 'react-modal';
import { Movie } from "@/types/movies";
import UpdateMovieForm from "@/components/updateMovieForm/UpdateMovieForm";
// import { UpdateMovieForm } from "../../updateMovieForm/UpdateMovieForm";



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

type MovieType = {
    movie: Movie
}

function setAppElement() {
    if (typeof document !== 'undefined') {

        Modal.setAppElement('#body-next');
    }
}

const MovieCard = ({ movie }: MovieType) => {


    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        setAppElement();
    }, []);


    return (

        <div className={styles.container}>
            <Image className={styles.cardImage} src={movie.cover_img} alt={`Cover Image of ${movie.title}`} width={75} height={115} priority={true} />

            <div className={styles.infoContainer}>
                <p className={styles.info}>Title: {movie.title}</p>

                <p className={styles.info}>Year: {movie.year}</p>

                <p className={styles.info}>Genre: {movie.genresName}</p>

                <p className={styles.info}>Score: {movie.score}</p>
            </div>

            <div className={styles.editContainer}>
                <Link href={`/${movie.id}`}>
                    <LuExpand className={styles.editIcon} />
                </Link>
                <Icon className={styles.editIcon} icon="material-symbols:edit" onClick={openModal} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Movie Update Modal"
            >
                <div className={styles.modalTitleContainer}>
                    <h2 className={styles.modalTitle}>Update Movie</h2>
                    <GiCrossMark className={styles.closeIcon} onClick={closeModal} />
                </div>
                <UpdateMovieForm
                    movieId={movie.id}
                    closeModal={closeModal}
                />
            </Modal>
        </div>

    )
}

export default MovieCard;