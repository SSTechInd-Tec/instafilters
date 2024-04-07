"use client"

import { Box, Container, Grid, } from "@mantine/core";
import ImageFilters from "../components/ImageFilters";
import FilterTabs from "../components/FilterTabs";
import { createContext, useState } from "react";



interface FilterContextTypes {
  filterClass: any;
  setFilterClass: any;
  customFilter: any;
  setCoustomFilter: any;
}

export const FilterContext = createContext<FilterContextTypes>({
  filterClass: '',
  setFilterClass: '',
  customFilter: '',
  setCoustomFilter: '',
});


export default function Home() {

  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCoustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  })

  const contextValues = {
    filterClass,
    setFilterClass,
    customFilter,
    setCoustomFilter
  }


  return (
   <FilterContext.Provider value={contextValues} >
      <Container>
        <Box style={{marginTop: '4rem', marginBottom: '4rem'}}>
          <h1 style={{textAlign: 'center'}}>Image Filters</h1>
        </Box>

        <Grid>
          <ImageFilters />
          <FilterTabs />
        </Grid>
      </Container>
   </FilterContext.Provider>
  );
}
