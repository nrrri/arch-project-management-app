import { House } from "lucide-react"
import { Button } from "../ui/button"

interface HeaderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signOut: any
}

const Header: React.FC<HeaderProps> = ({ signOut }) => {
    return (
        <header className='flex justify-between m-8 pb-4 border-b-1'>
            <div className='flex items-center gap-2'>
                <House />
                <h1 className='bold text-2xl'>Architecture Project Log</h1>
            </div>
            <Button onClick={() => signOut()}>Sign out</Button> {/* ← wrap in arrow function */}
        </header>
    )
}

export default Header