import { StyledInputComponent } from "@/components/shared/constant"
import type { ProjectFieldsType, ProjectType } from "@/components/shared/types"
import { importantFieldError, updateProjectFields } from "@/components/shared/utils"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


interface ProjectsProps {
    setProjectInput: React.Dispatch<React.SetStateAction<ProjectType>>
    inputData: ProjectFieldsType
}


const LocationField: React.FC<ProjectsProps> = ({ inputData, setProjectInput }) => {
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [address, setAddress] = useState('')
    const { label, name, type, value, checkError } = inputData
    const mapboxToken = import.meta.env.VITE_MAP_TOKEN
    const locationSuggestion = () => {
        return <>
            {
                suggestions.length > 0 && (
                    <ul className="absolute bg-white border w-full mt-1 rounded shadow z-10">
                        {suggestions.map((suggestion, index) => {
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
                )
            }
        </>
    }

    // todo: tb moved to another component
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

                // ! test
                console.log('results', results, response)

                setSuggestions(results)
            } catch (error) {
                console.error('Mapbox autocomplete error:', error)
            }
        }

        const debounce = setTimeout(fetchSuggestions, 300)
        return () => clearTimeout(debounce)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address])


    return (
        <div className={StyledInputComponent}>
            <div className="flex gap-2 items-center justify-between">
                <Label className="gap-1">{label}<span className="text-red-500">*</span></Label>
                <span className="text-red-600 text-xs">{importantFieldError(checkError)}</span>
            </div>
            <Input
                type={type}
                value={value}
                onChange={(e) => updateProjectFields(setProjectInput, {
                    [name]: e.target.value
                })} />
            <div>
                {locationSuggestion()}
            </div>
        </div>
    )
}

export default LocationField
