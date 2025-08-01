import { House } from "lucide-react"
import { Button } from "../../shared/ui/button"
import { Link, Outlet } from "react-router-dom"

interface HeaderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signOut: any
}

const Header: React.FC<HeaderProps> = ({ signOut }) => {
    return (
        <div>
            <header className='flex justify-between m-8 pb-4 border-b-1'>
                <div className='flex items-center gap-2 cursor-default'>
                    <House />
                    <Link to="/">
                        <h1 className='bold text-2xl'>Architecture Project Log</h1>
                    </Link>
                </div>
                <Button className="cursor-pointer" onClick={() => signOut()}>Sign out</Button> {/* ← wrap in arrow function */}
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Header