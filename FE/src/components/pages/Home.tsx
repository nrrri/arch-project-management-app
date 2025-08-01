import { Plus } from "lucide-react"
import { Button } from "../shared/ui/button"
import AllProjects from "./Projects/Projects"
import { Link } from "react-router-dom"


const Home: React.FC = () => {
    return (
        <div>
            {/* Content */}
            <div className="flex mr-8 justify-end">
                <Link to='create-project'>
                    <Button className="cursor-pointer"
                        onClick={() => 'create Project'}>
                        <Plus size={40} />
                        Create New Project
                    </Button>
                </Link>
            </div>
            {/* <CreateProject /> */}
            <AllProjects />
        </div>
    )
}

export default Home