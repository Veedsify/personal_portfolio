import "@/app/(dashboard)/globals.css"
import React, {ReactNode} from "react";

interface DashboardPageProps {
    children: ReactNode
}

const DashBoardLayout: React.FC<DashboardPageProps> = ({children}) => {
    return (
        <html>
            <body>
            <div className="max-w-screen-2xl mx-auto">
                {children}
            </div>
            </body>
        </html>
    )
}


export default DashBoardLayout