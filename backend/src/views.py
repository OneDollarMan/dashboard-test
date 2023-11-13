from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import crud, models, schemas
from .db_init import engine
from .migrations import migrations

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup_event():
    migrations.fill_db()


@app.get("/managers/", response_model=list[schemas.Manager])
def get_managers():
    return crud.get_managers()


@app.get("/sales/", response_model=list[schemas.Sale])
def get_sales():
    return crud.get_sales()


@app.get("/sales_grouped/", response_model=list[schemas.SaleGrouped])
def get_sales_grouped():
    return crud.get_sales_grouped()


@app.get("/losses/", response_model=list[schemas.Loss])
def get_losses():
    return crud.get_losses()


@app.get("/losses_grouped/", response_model=list[schemas.LossGrouped])
def get_losses_grouped():
    return crud.get_losses_grouped()


@app.get("/skills/", response_model=list[schemas.Skill])
def get_skills():
    return crud.get_skills()


@app.get("/skills_grouped/", response_model=list[schemas.SkillGrouped])
def get_skills_grouped():
    return crud.get_skills_grouped()
