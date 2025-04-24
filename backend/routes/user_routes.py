# from fastapi import APIRouter, Depends, HTTPException, status
# from config.db import user_collection
# from models.user import UserCreate, UserLogin
# from schemas.user_schema import userDetailsEntity
# from services.user_service import decode_access_token, hash_password, verify_password, create_access_token
# from bson import ObjectId
# from datetime import timedelta

# router = APIRouter()

# @router.post("/register")
# async def register_user(user: UserCreate):
#     existing_user = await user_collection.find_one({"email": user.email})
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered.")

#     hashed_password = hash_password(user.password)
#     user_dict = user.dict()
#     user_dict["password"] = hashed_password
#     new_user = await user_collection.insert_one(user_dict)
    
#     return {"message": "User registered successfully", "user_id": str(new_user.inserted_id)}

# @router.post("/login")
# async def login_user(user: UserLogin):
#     db_user = await user_collection.find_one({"email": user.email})
#     if not db_user or not verify_password(user.password, db_user["password"]):
#         raise HTTPException(status_code=401, detail="Invalid email or password.")

#     access_token = create_access_token(data={"sub": db_user["email"]}, expires_delta=timedelta(minutes=30))
#     return {"access_token": access_token, "token_type": "bearer"}

# @router.get("/me")
# async def get_user_profile(user_id: str):  
#     try:
#         db_user = await user_collection.find_one({"_id": ObjectId(user_id)})
        
#         if not db_user:
#             raise HTTPException(status_code=404, detail="User not found.")
        
#         return userDetailsEntity(db_user)  
#     except Exception as e:
#         raise HTTPException(status_code=400, detail="Invalid user ID")

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from config.db import user_collection
from models.user import UserCreate, UserLogin
from schemas.user_schema import userDetailsEntity
from services.user_service import decode_access_token, hash_password, verify_password, create_access_token
from bson import ObjectId
from datetime import timedelta

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")  # Declare it here properly

@router.post("/register")
async def register_user(user: UserCreate):
    existing_user = await user_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered.")

    hashed_password = hash_password(user.password)
    user_dict = user.dict()
    user_dict["password"] = hashed_password
    new_user = await user_collection.insert_one(user_dict)
    
    return {"message": "User registered successfully", "user_id": str(new_user.inserted_id)}

@router.post("/login")
async def login_user(user: UserLogin):
    db_user = await user_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    access_token = create_access_token(data={"sub": db_user["email"]}, expires_delta=timedelta(minutes=30))
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me")
async def get_user_profile(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_access_token(token)
        user_email = payload.get("sub")
        if not user_email:
            raise HTTPException(status_code=401, detail="Invalid token")

        db_user = await user_collection.find_one({"email": user_email})
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found.")

        return userDetailsEntity(db_user)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
