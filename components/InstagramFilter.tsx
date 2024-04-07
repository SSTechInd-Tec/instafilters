"use client";

import { Select, Tabs } from "@mantine/core"
import { useContext } from "react";
import { filterValues } from "../app/utils";
import { FilterContext } from "../app/page";
 
function InstagramFilter() {

    const {setFilterClass} = useContext(FilterContext);

    const handleChange = (value: string | null) => {
      setFilterClass(`filter-${value?.toLocaleLowerCase()}`);
    };

  return (
    <Tabs.Panel p={30} value="instagram-filters">
        <Select
            label="Filter"
            placeholder="Pick "
            data={filterValues.map((item) => {return item.split("-")[1].toLocaleUpperCase()})}
            onChange={handleChange}
        />
    </Tabs.Panel>
  )
}

export default InstagramFilter
