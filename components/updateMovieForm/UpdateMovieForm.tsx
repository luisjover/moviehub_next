"use client";

import styles from "./updateMovieForm.module.css";
import { useState, useEffect, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import toast, { Toaster } from "react-hot-toast";
import { GiBurningSkull } from "react-icons/gi";

type MovieFormData = {
    image: File | null;
    title: string;
    year: string;
    score: string;
    genre: string;
};

const UpdateMovieForm = ({ ...props }) => {

    const defaultValues: MovieFormData = {
        image: null,
        title: '',
        year: '',
        score: '',
        genre: '',
    };


    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<MovieFormData>({ defaultValues });
    const [isSeen, setIsSeen] = useState(false);

    const toggleSeen = () => {
        setIsSeen(!isSeen);
    };

    const submitForm: SubmitHandler<MovieFormData> = async (data) => {
        let loadingToast: string | null = null;
        try {
            // Muestra una notificación de carga cuando se inicia la carga de la película
            loadingToast = toast.loading('Movie is being uploaded...');

            // Simula una carga para demostrar la notificación
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Aquí puedes hacer la solicitud real para subir la película
            // Reemplaza el código simulado con tu lógica de envío real

            // Muestra una notificación de éxito cuando la película se ha subido correctamente
            toast.success('Movie uploaded successfully!!', { id: loadingToast });
            reset();
        } catch (error) {
            // Maneja los errores aquí y muestra una notificación de error si es necesario
            // error es la excepción capturada durante el proceso de envío
            if (loadingToast) {
                toast.error('Error uploading movie', { id: loadingToast });
            }
        }
    };

    useEffect(() => {
        reset({
            image: null,
            title: '',
            year: '',
            score: '',
            genre: '',
        });
    }, [reset]);

    const handleDeleteMovie = () => {
        // deleteMovie(props.movieId, getAccessTokenSilently)
        props.closeModal();
        // location.reload();

    }





    return (


        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className={styles.imageSelectionContainer}>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) => (
                            <>
                                <div className={styles.imageSelectorContainer}>
                                    <label htmlFor="image-input">Select Image</label>
                                    <input
                                        id="image-input"
                                        type="file"
                                        className={`${styles.input} ${styles.hidden}`}
                                        accept="image/*"
                                        onChange={(e) => {
                                            const selectedFile = e.target.files?.[0];
                                            if (selectedFile) {
                                                field.onChange(selectedFile);
                                            }
                                        }}
                                    />
                                </div>
                                <div className={styles.imagePreviewContainer} style={field.value ? { border: "none" } : {}}>
                                    {field.value ? (
                                        <Image
                                            className={styles.selectedImage}
                                            src={URL.createObjectURL(field.value)}
                                            alt="Preview"
                                            width={100}
                                            height={100}
                                        />
                                    ) : (
                                        <Image
                                            className={styles.selectedImage}
                                            src="/assets/images/img-preview-bg.jpg"
                                            alt="Default"
                                            width={100}
                                            height={100}
                                            priority={true}
                                        />
                                    )}
                                </div>
                            </>
                        )}
                    />
                </div>


                <div className={styles.inputContainer}>

                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: 'Title is required' }}
                        render={({ field }) => <input className={`${styles.titleInput} ${styles.input}`} {...field} type="text" placeholder="Movie title..." />}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>

                <div className={styles.inputContainer}>

                    <Controller
                        name="year"
                        control={control}
                        rules={{ required: 'Year is required' }}
                        render={({ field }) => <input className={`${styles.yearInput} ${styles.input}`} {...field} type="text" placeholder="Year of publication..." />}
                    />
                    {errors.year && <p className={styles.error}>{errors.year.message}</p>}
                </div>

                <div className={styles.inputContainer}>

                    <Controller
                        name="score"
                        control={control}
                        rules={{ required: 'Score is required' }}
                        render={({ field }) => <input className={`${styles.scoreInput} ${styles.input}`} {...field} type="text" placeholder="Movie score..." />}
                    />
                    {errors.score && <p className={styles.error}>{errors.score.message}</p>}
                </div>

                <div className={styles.inputContainer}>

                    <Controller
                        name="genre"
                        control={control}
                        render={({ field }) => (
                            <select className={`${styles.genreSelect} ${styles.input}`} {...field}>
                                <option value="" disabled hidden>Select a genre for your movie</option>
                                <option value="horror">Horror</option>
                                <option value="sci-fi">Sci-Fi</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="animation">Animation</option>
                                <option value="thriller">Thriller</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="mistery">Mistery</option>
                                <option value="adventure">Adventure</option>
                                <option value="crime">Crime</option>
                            </select>
                        )}
                    />
                </div>


                <div className={styles.privacityContainer}>
                    <p className={styles.privacityText}>Seen/Unseen</p>
                    <span className={styles.privacityButtonContainer}>
                        <p className={styles.privacityText}>{isSeen ? "Seen" : "Unseen"}</p>
                        <label className={styles.switch}>
                            <input type="checkbox" id="movie-privacity-check" onChange={toggleSeen} />
                            <span className={styles.slider}></span>
                        </label>
                    </span>
                </div>

                <button className={styles.submitButton} type="submit">Upload</button>

            </form>
            <div className={styles.whiteSpace}>
                <GiBurningSkull className={styles.deleteIcon} onClick={handleDeleteMovie} />

            </div>

        </div>

    )
}

export default UpdateMovieForm;