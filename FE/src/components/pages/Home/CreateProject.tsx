import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { type ProjectFieldsType, type ProjectType } from "@/components/shared/types"
import { importantFieldError, initialInput, updateProjectFields } from "@/components/shared/utils"
import { v1 as uuidv1 } from 'uuid';
import { useDispatch } from "react-redux"
import { StyledInputComponent } from "@/components/shared/constant"
import LocationField from "../CreateProject/locationField"
import DateInput from "../CreateProject/DateInput"
import type { AppDispatch } from "@/app/store"
import { useNavigate } from "react-router-dom"
import { addProject } from "@/features/projectSlice"

const CreateProject: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [projectInput, setProjectInput] = useState<ProjectType>({
        id: undefined,
        project: '',
        startDate: undefined,
        numberOfmilestone: 1,
        owner: '',
        location: '',
        finished: false,
        milestones: [],
    });
    const [newProject, setNewProject] = useState<ProjectType | null>(null)

    const ProjectFields: ProjectFieldsType[] = [
        {
            label: 'Project Name',
            name: 'project',
            type: 'text',
            value: projectInput.project,
            checkError: newProject?.project
        },
        {
            label: 'Location',
            name: 'location',
            type: 'text',
            value: projectInput.location,
            checkError: newProject?.location
        },
        {
            label: 'Owner',
            name: 'owner',
            type: 'text',
            value: projectInput.owner,
            checkError: newProject?.owner
        },
        {
            label: 'Start Date',
            name: 'startDate',
            checkError: String(newProject?.startDate)
        },
        {
            label: 'Number of milestone',
            name: 'numberOfmilestone',
            type: 'number',
            value: String(projectInput.numberOfmilestone),
            checkError: String(newProject?.numberOfmilestone)
        },
    ]

    const formInput = ({ label, name, type, value, checkError }: ProjectFieldsType) => {
        const inputData = { label, name, type, value, checkError }
        switch (name) {
            case 'project':
            case 'owner':
                return (
                    <div className={StyledInputComponent}>
                        <div className="flex gap-2 items-center justify-between">
                            <Label className="gap-1">
                                {label}
                                <span className="text-red-500">*</span>
                            </Label>
                            <span className="text-red-600 text-xs">{importantFieldError(checkError)}</span>
                        </div>
                        <Input
                            type={type}
                            value={value}
                            onChange={(e) => updateProjectFields(setProjectInput, {
                                [name]: e.target.value
                            })} />
                    </div>
                )
            case 'numberOfmilestone':
                return (
                    <div className={StyledInputComponent}>
                        <div className="flex gap-2 items-center">
                            <Label className="gap-1">
                                {label}
                            </Label>
                            <span className="text-red-600 text-xs">{importantFieldError(checkError)}</span>
                        </div>
                        <Input
                            min={1}
                            type={type}
                            value={value}
                            onChange={(e) => updateProjectFields(setProjectInput, {
                                [name]: Number(e.target.value)
                            })} />
                    </div>
                )
            case 'location':
                return (
                    <LocationField setProjectInput={setProjectInput} inputData={inputData} />
                )
            case 'startDate':
                return (
                    <div className={StyledInputComponent}>
                        <div className="flex gap-2 items-center justify-between">
                            <Label className="gap-1">
                                {label}
                                <span className="text-red-500">*</span>
                            </Label>
                            <span className="text-red-600 text-xs">{newProject !== null && !newProject.startDate && 'Please fill out this field'}</span>
                        </div>
                        <DateInput startDate={projectInput.startDate} setProjectInput={setProjectInput} />
                    </div>
                )
        }
    }
    const handleSubmit = async () => {
        if (checkImportantField(projectInput)) {
            setNewProject({
                ...projectInput,
                id: uuidv1(),
                finished: false,
                milestones: [],
            })

            try {
                if (newProject) {
                    await dispatch(addProject(newProject))
                }

            } catch (err) {
                console.error('Error submitting project:', err);
            } finally {
                setProjectInput(initialInput)
                navigate('/')
            }

        }
    }

    const checkImportantField = (projectDetail: ProjectType) => {
        const { numberOfmilestone, startDate, project, location, owner } = projectDetail
        if (startDate) {
            const checkField = [
                String(numberOfmilestone),
                project,
                startDate.toLocaleDateString(),
                location,
                owner
            ]
            return checkField.every((field) => field?.trim() !== '' && field?.trim())
        } else {
            return false;
        }
    }

    return (
        <div className="flex justify-center ">
            <div
                className="mt-40 border w-[600px] p-6 rounded-2xl">
                <h1 className="text-2xl text-center">
                    Create New Project
                </h1>
                {/* todo: input */}
                <div className="flex flex-col gap-3 m-8">
                    {/* ! INPUT FIELD */}
                    <div>
                        {ProjectFields.map((field, idx) =>
                            <div key={idx} className="flex flex-col my-3">
                                {formInput(field)}
                            </div>
                        )}
                    </div>
                    <Button
                        className="mt-8 cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default CreateProject