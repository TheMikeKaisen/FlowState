import Navbar from "./_components/navbar"


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <Navbar />
            <h1>

            {children}
            </h1>
        </div>
    )
}

export default DashboardLayout