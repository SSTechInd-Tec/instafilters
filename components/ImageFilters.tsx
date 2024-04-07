"use client"

import { Box, Button, Grid } from "@mantine/core"
import { useContext, useRef, useState } from "react"
import { FilterContext } from "../app/page"
import "../styles/instagram.css"
import styles from "../styles/styles.module.css"
import domtoimage from 'dom-to-image';

 
function ImageFilters() {

    const uploadImageRef = useRef<HTMLInputElement | null>(null);
    const imgResultRef = useRef<HTMLImageElement | null>(null);
    const [imageSrc, setImageSrc] = useState("");

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                if (reader.result) {
                    setImageSrc(reader.result.toString());
                }
            };
        }
    };

    const {filterClass, customFilter}:any = useContext(FilterContext);

    const custom_filters = {
        filter: `contrast(${customFilter.contrast}%) brightness(${customFilter.brightness}%)
                saturate(${customFilter.saturate}%) sepia(${customFilter.sepia}%)
                grayScale(${customFilter.gray}%)`
    }

    const classes_for_img = [filterClass, styles.imageStyles].join(" ")

    const renderImage = () => {
        return (
            <figure>
                <img alt="img" ref={imgResultRef} 
                className={classes_for_img} style={!filterClass ? custom_filters : {}} 
                src={imageSrc} />
            </figure>
        )
    }

    const handleDownload = () => {
        if (imgResultRef.current) {
            domtoimage.toJpeg(imgResultRef.current, { quality: 0.95 })
            .then(function (dataUrl:any) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
        }
    };
    

  return (
    <Grid.Col span={{ base: 12, md: 7, xs: 12 }}>
        <Box onClick={() => {uploadImageRef.current && uploadImageRef.current.click()}} className={styles.layout_styles}>
            {imageSrc ? renderImage() : (<p>Select Images</p>)}
        </Box>

        <input onChange={handleChangeInput} ref={uploadImageRef} type="file" accept="image/*" hidden />

        <Button onClick={handleDownload} mb={20} disabled={!imageSrc} variant="filled" fullWidth>Download Image</Button>
    </Grid.Col>
  )
}

export default ImageFilters
