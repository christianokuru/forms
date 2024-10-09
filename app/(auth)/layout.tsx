import { FC, ReactNode } from "react"

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return(
        <div className="bg-slate-200 border border-gray-400 dark:bg-input dark:border-gray-800 p-10 rounded-xl">
            {children}
        </div>
    )
}
export default AuthLayout