
async function getMessage() {
    const url = "20.171.127.66/fetch";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response status: ${response.status}');
        } const result = await response.json();
        console.log(result)
    }

    catch (error) { 
        console.error(error.message);
    }
    
}

var message = document.getElementById("msgbox").value

function sendJSON(){
fetch('http://localhost:8000/send/', {
    method: 'POST',
    body: {
        Title: 'Post Message',
        message: message
    }
})


}
getMessage()