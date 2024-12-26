from fastapi import APIRouter
import base64
from io import BytesIO
from apps.calculator.utils import analyze_image
from schema import ImageData  # Ensure this is imported
from PIL import Image

router = APIRouter()

@router.post('')
async def run(data: ImageData):
    # Decode the base64 image
    image_data = base64.b64decode(data.image.split(",")[1])  # Assumes data:image/png;base64,<data>
    image_bytes = BytesIO(image_data)
    image = Image.open(image_bytes)

    # Process the image
    responses = analyze_image(image, dict_of_vars=data.dict_of_vars)

    # Collect all the response data
    data = []
    for response in responses:
        data.append(response)
    
    print('response in route: ', data)  # This will print the responses in the console
    
    # Return the processed image data
    return {"message": "Image processed", "data": data, "status": "success"}
