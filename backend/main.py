from fastapi import FastAPI
from routes.user_routes import router as user_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Authentication User Details Management System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Or your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix="/api", tags=["Authentication"])

@app.get("/")
async def root():
    return {"message": "Welcome to Authentication User Details Management System"}