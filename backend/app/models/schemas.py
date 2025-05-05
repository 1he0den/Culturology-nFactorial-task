from pydantic import BaseModel, HttpUrl # type: ignore
from typing import Optional

class NationRequest(BaseModel):
    nation: str
    description: Optional[str] = None

class NationResponse(BaseModel):
    title: Optional[str]
    population: Optional[str]
    culture: Optional[str]
    holidays: Optional[str]
    image_url: Optional[HttpUrl]