from pydantic import BaseModel

class ImageData(BaseModel):
    image: str  # Base64 encoded image
    dict_of_vars: dict  # Variables as a dictionary
