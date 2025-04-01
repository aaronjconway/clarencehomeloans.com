#!/bin/bash

# Convert each .jpg file in the current directory to WebP using ffmpeg
for file in *; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        extension="${filename##*.}"
        filename_no_ext="${filename%.*}"
        if [ "$extension" == "jpg" ]; then
            echo "Converting $file to webp..."
            ffmpeg -i "$file" -q:v 75 "${filename_no_ext}.webp"
        fi
    fi
done

echo "Conversion complete."
