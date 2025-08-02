import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { updateProjectFields } from "@/components/shared/utils"
import type { ProjectType } from "@/components/shared/types"

interface DateInputProps {
    setProjectInput: React.Dispatch<React.SetStateAction<ProjectType>>
    startDate: Date | undefined;
}
const DateInput: React.FC<DateInputProps> = ({ setProjectInput, startDate }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="flex flex-col gap-3 just">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="justify-between"
                    >
                        <span className="text-sm font-light">{startDate ? startDate.toLocaleDateString() : "Select date"}</span>

                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={startDate}
                        captionLayout="dropdown"
                        
                        onSelect={(startDate) => {
                            updateProjectFields(setProjectInput, {
                                startDate: startDate
                            })
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default DateInput