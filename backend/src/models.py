from sqlalchemy import Column, String, Integer, Date, ForeignKey
from sqlalchemy.orm import relationship

from .db_init import Base


class Manager(Base):
    __tablename__ = 'managers'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    surname = Column(String)

    sales = relationship("Sale", back_populates="manager")
    losses = relationship("Loss", back_populates="manager")
    skills = relationship("Skill", back_populates="manager")


class Sale(Base):
    __tablename__ = 'sales'

    id = Column(Integer, primary_key=True)
    manager_id = Column(Integer, ForeignKey("managers.id"))
    date = Column(Date)
    amount = Column(Integer)

    manager = relationship("Manager", back_populates="sales")


class Loss(Base):
    __tablename__ = 'losses'

    id = Column(Integer, primary_key=True)
    manager_id = Column(Integer, ForeignKey("managers.id"))
    date = Column(Date)
    loss_amount = Column(Integer)

    manager = relationship("Manager", back_populates="losses")


class Skill(Base):
    __tablename__ = 'skills'

    id = Column(Integer, primary_key=True)
    manager_id = Column(Integer, ForeignKey("managers.id"))
    date = Column(Date)
    skill_amount = Column(Integer)

    manager = relationship("Manager", back_populates="skills")

