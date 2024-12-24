from fastapi import APIRouter
import base64
from io import BytesIO
from apps.calculator.utils import analyze
from schema import ImageData
from PIL import Image

router = APIRouter()

@router.post('/analyze')
async def run(data: ImageData):
    image_data = base64.b64decode(data.image.split(",")[1])  # Assumes data:image/png;base64,<data>
    image_bytes = BytesIO(image_data)
    image = Image.open(image_bytes)
    responses = analyze(image, dict_of_vars=data.dict_of_vars)
    processed_data = []
    for response in responses:
        processed_data.append(response)
    print('response in route: ', processed_data)
    return {"message": "Image processed", "data": processed_data, "status": "success"}
