import { Tabs } from "@mantine/core"
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
        {sliders.map((item:{field: string, defaultValue: number, label: string}) => {
            return (
                <Sliders key={item.field} defaultValue={item.defaultValue} field={item.field} label={item.label} />
            )
        })}
    </Tabs.Panel>
  )
}

export default CustomFilter
