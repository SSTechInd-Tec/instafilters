"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Grid } from "@mantine/core";
import ImageFilters from "./components/ImageFilters";
import FilterTabs from "./components/FilterTabs";

export default function Home() {
  return (
   <Container>
    <Box style={{marginTop: '4rem', marginBottom: '4rem'}}>
      <h1 style={{textAlign: 'center'}}>Image Filters</h1>
    </Box>

    <Grid>
      <ImageFilters />
      <FilterTabs />
    </Grid>

   </Container>
  );
}
