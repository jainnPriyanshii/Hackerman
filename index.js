let message = [
    "Initializing Hack Tool....",
    "Connecting to facebook....",
    "Connecting to Server1..",
    "Connection failed,Reconnecting....",
    "Connecting to server 2..",
    "Username jainnpriyanshi....",
    "Trying Brute force....",
    "200K password tried....",
    "Match not found...",
    "Trying another 200k password..,",
    "Password match successfully...",
    "Acessing Acoount..",
    "Fetching information...",
    "Hacking done..."
]

// s = getSeconds();

const sleep = async (second)=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{resolve (true)},  second * 1000)
    })
}


const showHack= async(message)=>{
     await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
}


(async () => {
    for(let i=0; i<message.length; i++){
         await showHack(message[i])
    }
})()