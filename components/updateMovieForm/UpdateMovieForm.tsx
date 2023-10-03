"use client";

import styles from "./updateMovieForm.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import PreviewBg from "@/public/assets/images/img-preview-bg.jpg";
import toast, { Toaster } from "react-hot-toast";
// import { deleteMovie, updateMovieById } from "../../api/fetchApi";
import { Icon } from '@iconify/react';


const UpdateMovieForm = ({ ...props }) => {


    const [uploadingImageUrl, setUploadingImageUrl] = useState<any | null>(null);
    const [seenState, setSeenState] = useState(false);



    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            image: null,
            title: "",
            year: "",
            score: "",
            genre: ""
        }
    })


    const submitForm = async (data: any) => {

        // const userId = currentUser?.id;
        toast.success('Movie is being uploaded...')

        // if (userId)
        // await updateMovieById(props.movieId, data, getAccessTokenSilently);

        reset();
        toast.success('Movie uploaded successfully...')
        setUploadingImageUrl(null);
        props.closeModal();
        // location.reload();
    }

    const handleDeleteMovie = () => {
        // deleteMovie(props.movieId, getAccessTokenSilently)
        props.closeModal();
        // location.reload();

    }


    const handleSeenState = () => {
        setSeenState(!seenState)
    }

    const uploadedImage = watch("image");

    useEffect(() => {
        if (uploadedImage) {
            const selectedFile = uploadedImage[0]
            const reader = new FileReader();
            reader.onload = () => {
                setUploadingImageUrl(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }

    }, [uploadedImage])


    return (


        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

                <div className={styles.imageSelectionContainer}>
                    <div className={styles.imageSelectorContainer}>
                        <label htmlFor="movie-img-input">Select image</label>
                        <input id="movie-img-input" className={`${styles.input} ${styles.hidden}`} type="file" accept="image/jpeg, image/jpg, image/webp" placeholder="Select movie cover..."
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required"
                                }
                            })}
                        />
                        {errors.image && <p className={styles.error}>{errors.image.message}</p>}
                    </div>
                    <div className={styles.ImagePreviewContainer} style={uploadingImageUrl ? { border: "none" } : {}}>
                        {uploadingImageUrl ? <Image className={styles.selectedImage} src={uploadingImageUrl} alt="your movie cover" /> : <Image className={styles.selectedImage} src={PreviewBg} alt="upload your image" />}
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input className={`${styles.titleInput} ${styles.input}`} type="text" placeholder="Movie title..."
                        {...register("title", {
                            required: {
                                value: true,
                                message: "movie title is required"
                            },
                            minLength: {
                                value: 4,
                                message: "Use 4 or more characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Use less than 20 characters"
                            }
                        })}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>




                <div className={styles.inputContainer}>
                    <input className={`${styles.yearInput} ${styles.input}`} type="number" placeholder="Year of publication..."
                        {...register("year", {
                            required: {
                                value: true,
                                message: "Year is required"
                            },
                            min: {
                                value: 1895,
                                message: "Use a valid year"
                            },
                            max: {
                                value: 2023,
                                message: "Use a valid year"
                            }
                        })}
                    />
                    {errors.year && <p className={styles.error}>{errors.year.message}</p>}
                </div>



                <div className={styles.inputContainer}>
                    <input className={`${styles.scoreInput} ${styles.input}`} type="number" step="0.1" placeholder="Movie score..."
                        {...register("score", {
                            required: {
                                value: true,
                                message: "Movie score is required"
                            },
                            min: {
                                value: 0,
                                message: "Use a value between 1 and 10"
                            },
                            max: {
                                value: 10,
                                message: "Use a value between 1 and 10"
                            }
                        })}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>






                <div className={styles.inputContainer}>
                    <select className={`${styles.genreSelect} ${styles.input}`} id="genres"
                        defaultValue=""
                        {...register("genre", {
                            required: {
                                value: true,
                                message: "Genre selection is required"
                            }
                        })}
                    >
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
                    {errors.genre && <p className={styles.error}>{errors.genre.message}</p>}
                </div>

                <div className={styles.privacityContainer}>
                    <p className={styles.privacityText}>Seen/Unseen</p>
                    <span className={styles.privacityButtonContainer}>
                        <p className={styles.privacityText}>{seenState ? "Seen" : "Unseen"}</p>
                        <label className={styles.switch}>
                            <input type="checkbox" id="movie-privacity-check" onChange={handleSeenState} />
                            <span className={styles.slider}></span>
                        </label>
                    </span>
                </div>

                <button className={styles.submitButton} type="submit">Upload</button>
            </form>
            <div className={styles.whiteSpace}>
                <Icon className={styles.deleteIcon} icon="icomoon-free:bin" onClick={handleDeleteMovie} />

            </div>

        </div>

    )
}

export default UpdateMovieForm;