from PIL import Image
import PIL
import sys, os
import shutil 
from pathlib import Path


def copyAndCompress(fromDirectory, compressDirectory):
    shutil.rmtree(compressDirectory)
    print(fromDirectory)

    shutil.copytree(fromDirectory, compressDirectory) 
    print(compressDirectory)
    print(os)
    print(os.chdir(compressDirectory))
    os.chdir(compressDirectory)
    images = [file for file in os.listdir() if file.endswith(('jpg', 'png' ))]
    print( images)
    print(os.listdir())
    for image in images:
        # 1. Open the image
        img = Image.open(image)
        img.thumbnail((1920,1080), Image.ANTIALIAS)
        # 2. Compressing the image
        img.save(image,
                optimize=True,
                quality=100)

base_path = Path(__file__).parent
print("test")

fromDirectory =  (base_path / "carouselImagesBeforeCompress").resolve()
compressDirectory =  (base_path / "carouselImagesAfterCompress").resolve()

copyAndCompress(fromDirectory, compressDirectory)