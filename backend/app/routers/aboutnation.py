from fastapi import APIRouter, HTTPException # type: ignore
from app.services.ai_service import AIService
from app.models.schemas import NationRequest, NationResponse
import logging

router = APIRouter()

@router.post("/nation", response_model=NationResponse)
async def generate_nation(request: NationRequest):
    prompt = f"""Опиши малоизвестный народ: {request.nation}.
    Краткое описание народа: {request.description or 'нет описания'}
    """
    
    try:
        aboutNation = await AIService.generate_text(prompt)
        
        if not all([aboutNation.get("title"), aboutNation.get("population"), 
                   aboutNation.get("culture"), aboutNation.get("holidays")]):
            raise HTTPException(status_code=500, detail="AI ответил пустыми данными.")

        aboutNation["image_url"] = await AIService.generate_nation_image(aboutNation["title"])
        return aboutNation
    except Exception as e:
        logging.error(f"Error generating nation: {str(e)}")
        raise HTTPException(status_code=500, detail="Произошла ошибка при обработке запроса")