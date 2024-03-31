"use client"

import { Box, Button, Grid } from "@mantine/core"
import { ChangeEventHandler, useRef, useState } from "react"



function ImageFilters() {

    const styles = {
        width: "100%", 
        height: "auto",
        background: "#ddd", 
        color: "black", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        cursor: "pointer",
        marginBottom: "20px"
    }

    const styles2 = {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    }

    const uploadImageRef = useRef(null);
    const [imageSrc, setImageSrc] = useState<Blob | MediaSource>();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageSrc(file);
        }
    };

    const renderImage = () => {
        return (
            <figure>
                <img style={styles2} src={URL.createObjectURL(imageSrc)} />
            </figure>
        )
    }

  return (
    <Grid.Col span={{ base: 12, md: 7, xs: 12 }}>
        <Box onClick={() => {uploadImageRef.current && uploadImageRef.current.click()}} style={styles}>
            {imageSrc ? renderImage() : (<p>Select Images</p>)}
        </Box>

        <input onChange={handleChangeInput} ref={uploadImageRef} type="file" accept="image/*" hidden />

        <Button mb={20} disabled={!imageSrc} variant="filled" fullWidth>Download Image</Button>
    </Grid.Col>
  )
}

export default ImageFilters
