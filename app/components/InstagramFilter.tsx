"use client";

import { Select, Tabs } from "@mantine/core"
import { useState } from "react";
import { filterValues } from "../utils";

function InstagramFilter() {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (value: string | null) => {
        setSelectedValue(value);
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
