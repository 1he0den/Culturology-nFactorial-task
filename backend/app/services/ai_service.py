from openai import AsyncOpenAI # type: ignore
import re
from app.utils.config import settings

client = AsyncOpenAI(api_key=settings.openai_api_key.get_secret_value())

class AIService:
    @staticmethod
    async def generate_text(prompt: str) -> dict:
        response = await client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {
                    "role": "system",
                    "content": """Ты культуролог который изучает народы, их культуру и т.д,т.п.
                    Вежливо расскажи о выбранном народе. Об их культуре, численности и всяких праздниках.
                    Ответь в формате: 
                    Название: ...
                    Численность: ...
                    Культура: ...
                    Праздники: ..."""
                },
                {
                    "role": "user", "content": prompt
                }
            ]
        )
        return parse_description(response.choices[0].message.content)
    
    @staticmethod
    async def generate_nation_image(title: str) -> str:
        response = await client.images.generate(
            model="dall-e-3",
            prompt=f"Реалистичный портрет народа {title} в средневековой одежде, толпа людей на фоне традиционного пейзажа.",
            size="1024x1024",
            quality="standard"
        )
        return response.data[0].url

def parse_description(text: str) -> dict:
    if not text:
        return {"title": None, "population": None, "culture": None, "holidays": None}
    
    return {
        "title": re.search(r"Название: (.+)", text).group(1) if re.search(r"Название: (.+)", text) else None,
        "population": re.search(r"Численность: (.+)", text).group(1) if re.search(r"Численность: (.+)", text) else None,
        "culture": re.search(r"Культура: (.+)", text).group(1) if re.search(r"Культура: (.+)", text) else None,
        "holidays": re.search(r"Праздники: (.+)", text).group(1) if re.search(r"Праздники: (.+)", text) else None
    }