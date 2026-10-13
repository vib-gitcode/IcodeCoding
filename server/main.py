from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
messageinfo = ""


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_headers=["*"],
    allow_methods=["*"],
    allow_credentials=True
)
class Item(BaseModel):
    Title: str = "fggfgf"
    Message: str = "ghhghghg"

@app.post("/send/")
async def send_message(item:Item):
    #this global messageinfo statement makes sure the method is talking about the variable on line 5. without this, line 24 thinks that we are trying to add to a local variable called messageinfo, which of course, does not exist. good job dude, this was a tough bug.
    global messageinfo
    messageinfo += item.Message+" <br>"
   
    


@app.get("/fetch/")
async def download_file():
   return {"message": messageinfo}
