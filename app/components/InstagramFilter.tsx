"use client";

import { Select, Tabs } from "@mantine/core"
import { useContext } from "react";
import { filterValues } from "../utils";
import { FilterContext } from "../page";

function InstagramFilter() {

    const {setFilterClass} = useContext(FilterContext);

    const handleChange = (value: string | null) => {
      setFilterClass(value?.replace(" ", "-").toLocaleLowerCase());
    };

  return (
    <Tabs.Panel p={30} value="instagram-filters">
        <Select
            label="Filter"
            placeholder="Pick "
            data={filterValues.map((item) => {return item.replace("-", " ").toLocaleUpperCase()})}
            onChange={handleChange}
        />
    </Tabs.Panel>
  )
}

export default InstagramFilter
