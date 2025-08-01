import { useEffect, useState } from "react"
import axios from 'axios'
import React from "react"
import { Button } from "@/components/ui/button"
import { DateInput } from "../CreateProject/DateInput"
const mapboxToken = import.meta.env.MAP_TOKEN
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CreateProjectProps {

}
const CreateProject: React.FC<CreateProjectProps> = () => {
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [address, setAddress] = useState('')
    // const [date, setDate] = useState<Date | undefined>(new Date())
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!address) {
                setSuggestions([])
                return
            }

            try {
                const response = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                        address
                    )}.json`,
                    {
                        params: {
                            access_token: mapboxToken,
                            autocomplete: true,
                            country: 'CA', // Optional: restrict to Canada
                            limit: 5,
                        },
                    }
                )

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const results = response.data.features.map((f: any) => f.place_name)
                setSuggestions(results)
            } catch (error) {
                console.error('Mapbox autocomplete error:', error)
            }
        }

        const debounce = setTimeout(fetchSuggestions, 300)
        return () => clearTimeout(debounce)
    }, [address])


    return (
        <div className="flex justify-center ">
            <div className="mt-40 border w-[600px] h-[600px] p-6 rounded-2xl">
                <h1 className="text-2xl text-center">
                    Create New Project
                </h1>
                {/* todo: input */}
                <form className="flex flex-col gap-3 m-8">
                    <div className={StyledInputComponent}>
                        <label htmlFor="">Project name</label>
                        <input
                            type="text"
                            name="projectName"
                            value={''}
                            className={StyledInputPlaceholder} />
                    </div>
                    <div className={`relative ${StyledInputComponent}`}>
                        <label htmlFor="">Location</label>
                        <input
                            type="text"
                            name="owner"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={StyledInputPlaceholder} />
                        {suggestions.length > 0 && (
                            <ul className="absolute bg-white border w-full mt-1 rounded shadow z-10">
                                {suggestions.map((suggestion, index) => {
                                    console.log(suggestion)
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => setAddress(suggestion)}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {suggestion}
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                    <div className={StyledInputComponent}>
                        <label htmlFor="">Owner</label>
                        <input
                            type="text"
                            name="owner"
                            value={''}
                            className={StyledInputPlaceholder} />
                    </div>
                    <div className={StyledInputComponent}>
                        <label className="bold" htmlFor="">Start date</label>
                        <DateInput />
                    </div>
                    <div className={StyledInputComponent}>
                        <label htmlFor="">Number of stage</label>
                        <input
                            type="number"
                            name="owner"
                            value={''}
                            className={StyledInputPlaceholder} />
                    </div>
                    <Button
                        className="mt-8 cursor-pointer"
                    // todo: add project in redux react
                    // onSubmit={console.log('set')}
                    >
                        Create
                    </Button>
                </form>
            </div>
        </div>
    )
}
/*
  startDate: string;
  numberOfStage: number;
  owner: string;
  location: string;
  finished: boolean;
  stage?: MilestoneType[];
 */

const StyledInputComponent = `flex flex-col`
const StyledInputPlaceholder = `border rounded-lg px-3`

export default CreateProject