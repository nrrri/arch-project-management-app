import { Plus } from "lucide-react"
import { Button } from "../ui/button"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CreateProjectProps {

}
const CreateProject: React.FC<CreateProjectProps> = () => {
    return (
        <div className="flex mr-8 justify-end">
            <Button>
                <Plus size={40} />
                Create New Project
            </Button>
        </div>
    )
}

export default CreateProject