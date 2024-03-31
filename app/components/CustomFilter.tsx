import { Box, Slider, Tabs, Text } from "@mantine/core"

function CustomFilter() {

    const sliders = [
        {label: "Contrast", defaultValue: 50},
        {label: "Brightness", defaultValue: 50},
        {label: "Saturation", defaultValue: 50},
        {label: "Sepia", defaultValue: 50},
        {label: "Gray Scale", defaultValue: 50},
    ]

  return (
    <Tabs.Panel p={30} value="custom-filters">
        {sliders.map((item) => {
            return (
                <Box my={30}>
                    <Text>{item.label}</Text>
                    <Slider defaultValue={item.defaultValue} labelAlwaysOn />
                </Box>
            )
        })}
    </Tabs.Panel>
  )
}

export default CustomFilter
