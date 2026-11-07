
async function getMessage() {
<<<<<<< HEAD
    const url = "20.171.127.66/fetch";
=======
    const url = "http://172.16.11.161:8080/fetch/";
>>>>>>> 183923edf8ccb90e4f30cdef1e5b0d5c4586d58f
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response status: ${response.status}');
        } const result = await response.json();
        var md = result.message
        var myarray = md.split("<br>")
        document.getElementById("postArea").innerHTML = ""
        myarray.forEach(element => {
            document.getElementById("postArea").innerHTML += "<p>" + element + "</p>"
        })

    }

    catch (error) {
        console.error(error.message);
    }

}



function sendJSON() {
    var message = document.getElementById("msgbox").value
    fetch('http://172.16.11.161:8080/send/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            "Title": "string",
            "Message": message


        })
    })


}

setInterval(getMessage, 1000)