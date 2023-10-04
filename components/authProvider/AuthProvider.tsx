
import { getSession, getAccessToken } from "@auth0/nextjs-auth0"
import Login from "../login/Login";

type Props = {
    children: React.ReactNode
}

const AuthProvider = async ({ children }: Props) => {
    const session = await getSession();
    const token = await getAccessToken();
    if (!session || !token) {
        return <Login />
    }
    return (
        <div>{children}</div>
    )
}

export default AuthProvider;