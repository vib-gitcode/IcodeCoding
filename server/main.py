from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
messageinfo = ""


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://127.0.0.1:5500/'],
    allow_headers=["*"],
    allow_methods=["*"]
)
class Item(BaseModel):
    Title: str = "fggfgf"
    Message: str = "ghhghghg"

@app.post("/send/")
async def send_message(item:Item):
    
   
    messageinfo += item.Message
    


@app.get("/fetch/")
async def download_file():
   return {"message": messageinfo}
