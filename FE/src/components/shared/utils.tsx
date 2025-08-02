import type { ProjectType } from "./types";

export const updateProjectFields = (setProject: React.Dispatch<React.SetStateAction<ProjectType>>, fields: Partial<ProjectType>) => {
    setProject((prev) => ({
        ...prev,
        ...fields,
    }));

}

export const initialInput: ProjectType = {
    id: undefined,
    project: '',
    startDate: undefined,
    numberOfmilestone: 1,
    owner: '',
    location: '',
    finished: false,
    milestones: [],
}

export const importantFieldError = (fieldInput: string | undefined) => {
    return fieldInput === '' ? `Please fill out this field` : ''
}