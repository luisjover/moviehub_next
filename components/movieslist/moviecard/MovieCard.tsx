"use client";

import styles from "./movieCard.module.css";
import Image from 'next/image';
import { FC, useState } from "react";
import { Icon } from '@iconify/react';
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

const MovieCard = ({ movie }: MovieType) => {

    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (

        <div className={styles.container}>
            <Image className={styles.cardImage} src={movie.cover_img} alt={`Cover Image of ${movie.title}`} width={75} height={115} />

            <div className={styles.infoContainer}>
                <p className={styles.info}>Title: {movie.title}</p>

                <p className={styles.info}>Year: {movie.year}</p>

                <p className={styles.info}>Genre: {movie.genres}</p>

                <p className={styles.info}>Score: {movie.score}</p>
            </div>
            <div className={styles.editContainer}>
                <Icon className={styles.editIcon} icon="material-symbols:edit" onClick={openModal} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Movie Update Modal"
                appElement={document.getElementById('root')!}
            >
                <div className={styles.modalTitleContainer}>
                    <h2 className={styles.modalTitle}>Update Movie</h2>
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