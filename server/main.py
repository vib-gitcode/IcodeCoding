from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
messageinfo = ""


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)
class Item(BaseModel):
    Title: str
    Message: str

@app.post("/send/")
async def send_message(item:Item):
    
   
    messageinfo += item.Message
    


@app.get("/fetch/")
async def download_file():
   return {"message": messageinfo}
