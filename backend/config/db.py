from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "authentication_db")

client = AsyncIOMotorClient(MONGO_URI)
database = client[DATABASE_NAME]
user_collection = database["user_details"]