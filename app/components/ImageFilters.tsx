"use client"

import { Box, Button, Grid } from "@mantine/core"
import { ChangeEventHandler, useContext, useRef, useState } from "react"
import { FilterContext } from "../page"
import "../styles/instagram.css"
import domtoimage from 'dom-to-image';



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

    

    const uploadImageRef = useRef(null);
    const imgResultRef = useRef<Node>();
    const [imageSrc, setImageSrc] = useState<Blob | MediaSource>(null);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageSrc(file);
        }
    };

    const {filterClass, customFilter}:any = useContext(FilterContext);

    const styles2 = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    }

    const styles3 = {
        filter: `contrast(${customFilter.contrast}%) brightness(${customFilter.brightness}%)
                saturate(${customFilter.saturate}%) sepia(${customFilter.sepia}%)
                grayScale(${customFilter.gray}%)`
    }

    const renderImage = () => {
        return (
            <figure>
                <img ref={imgResultRef} className={filterClass} style={filterClass ? styles2 : {...styles2, ...styles3}} src={URL.createObjectURL(imageSrc)} />
            </figure>
        )
    }

    const handleDownload = () => {
        domtoimage.toJpeg(imgResultRef.current || null, { quality: 0.95 })
        .then(function (dataUrl:any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
    };
    

  return (
    <Grid.Col span={{ base: 12, md: 7, xs: 12 }}>
        <Box onClick={() => {uploadImageRef.current && uploadImageRef.current.click()}} style={styles}>
            {imageSrc ? renderImage() : (<p>Select Images</p>)}
        </Box>

        <input onChange={handleChangeInput} ref={uploadImageRef} type="file" accept="image/*" hidden />

        <Button onClick={handleDownload} mb={20} disabled={!imageSrc} variant="filled" fullWidth>Download Image</Button>
    </Grid.Col>
  )
}

export default ImageFilters
