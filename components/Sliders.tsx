"use client";
 
import { Box, Slider, Text } from "@mantine/core"
import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../app/page"

function Sliders({label, defaultValue, field}: {label: string, defaultValue: number, field: string}) {
    
    const {customFilter, setCoustomFilter, setFilterClass} = useContext(FilterContext);
    const [value, setValue] = useState(0);


    useEffect(() => {
        setCoustomFilter({...customFilter, [field]: value})
    }, [value])

    const handleChange = (value: number) => {
        setValue(value)
        setFilterClass("")
    }
    return (
    <Box my={30}>
        <Text>{label}</Text>
        <Slider onChange={handleChange} defaultValue={defaultValue} labelAlwaysOn />
    </Box>
  )
}

export default Sliders
