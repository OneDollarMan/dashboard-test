from pydantic import BaseSettings, Field


class DBSettings(BaseSettings):
    DB_USERNAME: str = Field(env='POSTGRES_USER')
    DB_PASSWORD: str = Field(env='POSTGRES_PASSWORD')
    DB_DATABASE: str = Field(env='POSTGRES_DB')
    DB_HOST: str = Field(env='POSTGRES_HOST')
    DB_PORT: int = Field(env='POSTGRES_PORT')

    @property
    def data_source_name(self):
        return f"postgresql://{self.DB_USERNAME}:{self.DB_PASSWORD}@" \
               f"{self.DB_HOST}:{self.DB_PORT}/{self.DB_DATABASE}"


db_settings = DBSettings()
