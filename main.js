const Text = document.querySelector(".text");
const Btn = document.getElementById("btn");
Btn.addEventListener("click", () => {

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;


    const synth = window.speechSynthesis;


    const ReplyText = (value) => {
        p = document.createElement("p");
        p.classList.add("reply")
        p.innerHTML = value
        Text.appendChild(p);
        const utter = new SpeechSynthesisUtterance(value);
        synth.speak(utter);
    }

    let p = document.createElement("p");
    recognition.addEventListener("result", (e) => {
        const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("").trim();
        // console.log(text);
        p.innerHTML = text;
        Text.appendChild(p);

        if (e.results[0].isFinal) {
            if (text.includes("hello Badshah")) {
                ReplyText("hi Arshad, How CAN i HELP YOU");
            } else if (text.includes("what is your name")) {
                ReplyText("MY NAME Badshah, aur,   Tera Naam,     Bata");
            } else if (text.includes("open YouTube")) {
                ReplyText("Please Wait");
                window.open("https://www.youtube.com")
            } else if (text.includes("what is time")) {
                const Time = new Date().toLocaleTimeString();
                ReplyText(Time);
            } else if (text.includes("what is date today")) {
                const Time = new Date().toDateString();
                ReplyText(Time);
            } else if (!text.indexOf(text)) {
                ReplyText("I am Not Listening");
            }

            // var val = "";
            // switch (text.includes(val)) {
            //     case val == "hello Badshah":
            //         ReplyText("hi Arshad, How CAN i HELP YOU");
            //         break;

            //     default:
            //         break;
            // }
            p = document.createElement("p");
        }



    })

    recognition.addEventListener("end", () => {
        recognition.start();
    })
    recognition.start();

})