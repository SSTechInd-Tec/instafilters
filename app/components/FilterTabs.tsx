import { Grid, Tabs } from "@mantine/core"
import InstagramFilter from "./InstagramFilter"
import CustomFilter from "./CustomFilter"

function FilterTabs() {
  return (
    <Grid.Col span={{ base: 12, md: 5, xs: 12 }} >
            <Tabs defaultValue="instagram-filters">
                <Tabs.List>
                    <Tabs.Tab value="instagram-filters">Instagram Filter</Tabs.Tab>
                    <Tabs.Tab value="custom-filters">Custom Filter</Tabs.Tab>
                </Tabs.List>

                <InstagramFilter />
                <CustomFilter />
            </Tabs>
    </Grid.Col>
  )
}

export default FilterTabs
