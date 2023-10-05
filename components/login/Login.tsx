import Header from "../header/Header";
import styles from "./login.module.css";

type Props = {}

const Login = (props: Props) => {
    return (
        <div>
            <Header />
            <a href="/api/auth/login">
                <button className={styles.button}>Log In</button>
            </a>
        </div>
    )
}

export default Login;