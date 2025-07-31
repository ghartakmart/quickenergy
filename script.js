let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
 window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant of team ashutosh ,created by Ashutosh Sir")
        window.open("Visual Stdio Code://virtualassistant://ashu.html","_blank")

    }
    else if(message.includes("hu r u")){
        speak("i am virtual assistant of team ashutosh ,created by Ashutosh Sir")
        window.open("ashu.html")

    }
    else if(message.includes("what ise your name")){
        speak("My name is galaxy  I am  virtual assistant .")
    }
    else if(message.includes("Who is Deepak")){
        speak("Deepk Sir is a good teacher and teaches DBMS , Python and dsa")
    }
    else if(message.includes("who is rajesh sir")){
        speak("Rajesh Sir is a good teacher and teaches Operating system andd computer graphics or as well as dsa using c .")
    }
    else if(message.includes("kya tum mujhse shaadi kar sakti ho")){
        speak("nahi mai shadi nahi kar sakti kyuki mai ek AI model hoon")
    }
    else if(message.includes("galaxy water bottle lekar aao")){
        speak("okay Ashutosh sir, le aati hoon")
    }
    else if(message.includes("galaxy kya tumne kashif ko dekha hai")){
        speak("jii sir kashif ko maine dekha hai, wo abhi class mein hain")
    }
    else if(message.includes("tumhen kisne banaya")){
        speak("mujhe Ashutosh sir ne banaya hai")
    }             
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }    
    else if(message.includes("open VSCode")){
        speak("opening visual stdio code..")
        window.open("Visual Stdio Code://")      
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else if(message.includes("open notepad")){
        speak("opening notepad..")
        window.open("notepad://")
    }
     else if(message.includes("galaxy please play trending song")){
        speak("okay sir, opening youtube and playing trending song")
        window.open("https://youtube.com/shorts/5sUd89x9GLA?si=TGdFINPiCy2Bw-_k")
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}