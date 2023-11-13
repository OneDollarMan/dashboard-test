from sqlalchemy import func, asc, extract
from .db_init import sess as s
from . import models


def get_managers():
    return s.query(models.Manager).all()


def get_manager_by_name_and_surname(name: str, surname: str):
    return s.query(models.Manager).filter(models.Manager.name.like(name), models.Manager.surname.like(surname)).first()


def save_manager(manager: models.Manager):
    s.add(manager)
    s.commit()
    s.refresh(manager)
    return manager


def get_sales():
    return s.query(models.Sale).all()


def get_sales_grouped():
    return s.query(extract("year", models.Sale.date).label("year"),
                   extract("month", models.Sale.date).label("month"),
                   func.sum(models.Sale.amount).label("amount")).group_by("year", "month").order_by("year", "month").all()


def save_sale(sale: models.Sale):
    db_sale = s.query(models.Sale).filter(models.Sale.date == sale.date, models.Sale.manager_id == sale.manager_id).first()
    if db_sale is None:
        s.add(sale)
        s.commit()


def get_losses():
    return s.query(models.Loss).all()


def get_losses_grouped():
    return s.query(extract("year", models.Loss.date).label("year"),
                   extract("month", models.Loss.date).label("month"),
                   func.sum(models.Loss.loss_amount).label("amount")).group_by("year", "month").order_by("year", "month").all()


def save_loss(loss: models.Loss):
    db_sale = s.query(models.Loss).filter(models.Loss.date == loss.date, models.Loss.manager_id == loss.manager_id).first()
    if db_sale is None:
        s.add(loss)
        s.commit()


def get_skills():
    return s.query(models.Skill).all()


def get_skills_grouped():
    return s.query(extract("year", models.Skill.date).label("year"),
                   extract("month", models.Skill.date).label("month"),
                   func.avg(models.Skill.skill_amount).label("amount")).group_by("year", "month").order_by("year", "month").all()


def save_skill(skill: models.Skill):
    db_sale = s.query(models.Skill).filter(models.Skill.date == skill.date, models.Skill.manager_id == skill.manager_id).first()
    if db_sale is None:
        s.add(skill)
        s.commit()
