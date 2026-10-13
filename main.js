
async function getMessage() {
    const url = "http://localhost:8000/fetch/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response status: ${response.status}');
        } const result = await response.json();
        document.getElementById("postArea").innerHTML = result.message
    }

    catch (error) {
        console.error(error.message);
    }

}



function sendJSON() {
    var message = document.getElementById("msgbox").value
    fetch('http://localhost:8000/send/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify ({
            "Title": "string",
            "Message": message


        })
    })


}

setInterval(getMessage, 1000)