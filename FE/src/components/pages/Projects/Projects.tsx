import type { projectType } from "@/components/shared/types"
import { projectData } from "../../shared/constant"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProjectsProps {

}
const Projects: React.FC<ProjectsProps> = () => {
    const openProject = (idx: number) => {
        console.log(idx)
        // todo: implement project page 
    }

    const sortByUnfinished = (data: projectType[]) => {
        return data.sort((a, b) => {
            return Number(a.finished) - Number(b.finished)
        })
    }
    return (
        <div className="grid grid-cols-3 gap-4 m-8">
            {sortByUnfinished(projectData).map((pj, idx) => {
                return (
                    <div
                        key={idx}
                        className={`flex flex-col border-2 rounded-lg p-3 cursor-pointer ${pj.finished ? '' : 'border-blue-400'}`}
                        onClick={() => openProject(idx)}>
                        <h1 className={`text-3xl bold ${pj.finished ? 'text-neutral-500' : 'text-blue-900'}`}>{pj.project}</h1>
                        <hr className="my-1" />
                        <div>{`Owner: ${pj.owner}`}</div>
                        <div>{`Start date: ${pj.startDate}`}</div>
                        <div>{`Number of Stage: ${pj.numberOfStage}`}</div>
                        <div>{`Location: ${pj.location}`}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects