from pydantic_settings import BaseSettings # type: ignore
from pydantic import SecretStr # type: ignore

class Settings(BaseSettings):
    openai_api_key: SecretStr
    
    class Config:
        env_file = ".env"

settings = Settings()