import Span from "../generals/Span"
import { useState } from "react";
import imageCompression from 'browser-image-compression';

function Wallpaper({ variant = "wallpaper", changeWallpaper, src, ...props }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [compressedFile, setCompressedFile] = useState(null);

    const compressImage = async (file) => {
        const options = {
            maxSizeMB: 0.01,           // Максимальный размер в MB
            // maxWidthOrHeight: 200,  // Максимальная ширина или высота в px
            useWebWorker: true,
            fileType: file.type
        };

        try {
            const compressedFile = await imageCompression(file, options);
            const renamedFile = new File([
                await compressedFile.arrayBuffer()],
                `wallpaper.${file.name.split('.')[1]}`,
                {type: file.type}
            )
            const renamedUrl = URL.createObjectURL(renamedFile);
            setPreviewUrl(renamedUrl);
            if (changeWallpaper) {
                changeWallpaper(renamedFile);
                console.log(renamedFile)
            }
        } catch (error) {
            console.error('Ошибка сжатия:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file && file.type.startsWith('image/')) {
            compressImage(file);
        }
    };

    return (
        <label htmlFor={variant} className="flex flex-col gap-4 items-center">
            {previewUrl ? (
                <img src={previewUrl} alt="Preview"
                    className="w-full max-h-[230px] object-cover"/>
            ) : (
                <img {...props} src={src} alt="Preview"
                    className="w-full max-h-[230px] object-cover"/>
            )}
            <Span variant="link">
                Выберите фото обоев
            </Span>
            <input hidden id={variant} 
                onChange={handleFileChange}
                type="file"
                accept=".jpg,.jpeg,.png,.gif"></input>
        </label>
    )
}

export default Wallpaper;