import { Box, Slider, Tabs, Text } from "@mantine/core"
import Sliders from "./Sliders"

function CustomFilter() {

    const sliders = [
        {label: "Contrast", field: "contrast", defaultValue: 100},
        {label: "Brightness", field: "brightness", defaultValue: 100},
        {label: "Saturation", field: "saturate", defaultValue: 100},
        {label: "Sepia", field: "sepia", defaultValue: 0},
        {label: "Gray Scale", field: "gray", defaultValue: 0},
    ]

  return (
    <Tabs.Panel p={30} value="custom-filters">
        {sliders.map((item) => {
            return (
                <Sliders label={item.label} defaultValue={item.defaultValue} field={item.field}  />
            )
        })}
    </Tabs.Panel>
  )
}

export default CustomFilter
