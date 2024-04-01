"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Grid } from "@mantine/core";
import ImageFilters from "./components/ImageFilters";
import FilterTabs from "./components/FilterTabs";
import { createContext, useState } from "react";


export const FilterContext = createContext({});


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
