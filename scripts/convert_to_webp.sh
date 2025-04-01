#!/bin/bash

# Converts to 7:4 webp

# Convert each file in the current directory to WebP
for file in *; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        extension="${filename##*.}"
        filename_no_ext="${filename%.*}"
        if [ "$extension" != "jpg" ]; then
            echo "Converting $file to webp..."
            convert "$file" -resize 1400x800^ -gravity center -crop 1400x800+0+0 +repage "${filename_no_ext}.webp"
        fi
    fi
done

echo "Conversion complete."
