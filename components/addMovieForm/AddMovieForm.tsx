import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import PreviewBg from "../../assets/images/img-preview-bg.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import "./addMovieForm.css";
import toast, { Toaster } from "react-hot-toast";
import { useUserContext } from "../../utils/hooks/useUserContext";
import { createNewMovie } from "../../api/fetchApi";



// enum MoviesGenres {

//     HORROR = "horror",
//     SCIFI = "Sci-fi",
//     FANTASY = "fantasy",
//     ANIMATION = "animation",
//     THRILLER = "thriller",
//     ACTION = "action",
//     COMEDY = "comedy",
//     MISTERY = "mistery",
//     ADVENTURE = "adventure",
//     CRIME = "crime"
// }


export const AddMovieForm = () => {




    const [uploadingImageUrl, setUploadingImageUrl] = useState<any | null>(null);
    const [seenState, setSeenState] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    const { currentUser } = useUserContext();



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

        const userId = currentUser?.id;
        toast.success('Movie is being uploaded...')

        if (userId) await createNewMovie(userId, data, getAccessTokenSilently);

        reset();
        toast.success('Movie uploaded successfully...')
        setUploadingImageUrl(null);
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


        <>
            <form className="add-movie-form" onSubmit={handleSubmit(submitForm)}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

                <div className="img-selector-wrapper">
                    <div className="movie-img-selector-container">
                        <label htmlFor="movie-img-input" className="movie-img-label">Select image</label>
                        <input id="movie-img-input" className="movie-img-input add-movie-input hidden-input" type="file" accept="image/jpeg, image/jpg, image/webp" placeholder="Select movie cover..."
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required"
                                }
                            })}
                        />
                        {errors.image && <p className="movie-form-error">{errors.image.message}</p>}
                    </div>
                    <div className="img-selected-preview-container" style={uploadingImageUrl ? { border: "none" } : {}}>
                        {uploadingImageUrl ? <img className="img-selected-preview" src={uploadingImageUrl} alt="your movie cover" /> : <img className="img-selected-preview" src={PreviewBg} alt="upload your image" />}
                    </div>
                </div>

                <div className="movie-input-container">
                    <input className="movie-title-input add-movie-input" type="text" placeholder="Movie title..."
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
                    {errors.title && <p className="movie-form-error error-title">{errors.title.message}</p>}
                </div>




                <div className="movie-input-container">
                    <input className="movie-year-input add-movie-input" type="number" placeholder="Year of publication..."
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
                    {errors.year && <p className="movie-form-error error-title">{errors.year.message}</p>}
                </div>



                <div className="movie-input-container">
                    <input className="movie-score-input add-movie-input" type="number" step="0.1" placeholder="Movie score..."
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
                    {errors.title && <p className="movie-form-error error-title">{errors.title.message}</p>}
                </div>






                <div className="movie-input-container">
                    <select className="movie-genre-select add-movie-input" id="genres"
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
                    {errors.genre && <p className="movie-form-error select-error">{errors.genre.message}</p>}
                </div>

                <div className="privacity-selection-container">
                    <p className="toggle-select-paragraph">Seen/Unseen</p>
                    <span className="privacity-btn-container">
                        <p className="toggle-select-paragraph">{seenState ? "Seen" : "Unseen"}</p>
                        <label className="switch">
                            <input type="checkbox" id="movie-privacity-check" onChange={handleSeenState} />
                            <span className="slider"></span>
                        </label>
                    </span>
                </div>

                <button className="add-movie-submit-btn" type="submit">Upload</button>
            </form>
            <div className="white-space-form">

            </div>
        </>

    )
}


