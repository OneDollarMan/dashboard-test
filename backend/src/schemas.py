from pydantic import BaseModel
from datetime import date


class Sale(BaseModel):
    id: int
    manager_id: int
    date: date
    amount: int

    class Config:
        orm_mode = True


class SaleGrouped(BaseModel):
    year: int
    month: int
    amount: int

    class Config:
        orm_mode: True


class Loss(BaseModel):
    id: int
    manager_id: int
    date: date
    loss_amount: int

    class Config:
        orm_mode = True


class LossGrouped(BaseModel):
    year: int
    month: int
    amount: int

    class Config:
        orm_mode: True


class Skill(BaseModel):
    id: int
    manager_id: int
    date: date
    skill_amount: int

    class Config:
        orm_mode = True


class SkillGrouped(BaseModel):
    year: int
    month: int
    amount: int

    class Config:
        orm_mode: True


class Manager(BaseModel):
    id: int
    name: str
    surname: str
    sales: list[Sale]
    losses: list[Loss]
    skills: list[Skill]

    class Config:
        orm_mode = True


