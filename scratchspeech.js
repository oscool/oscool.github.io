class ScratchFetch {
    constructor() {}
    getInfo() {
        return {
            id: "scratchspeech",
            name: "Speech Recognization",
            blocks: [
                {
                    opcode: "s",
                    blockType: "command",
                    text: "Speech Recognization",
                },
                {
                    opcode: "t",
                    blockType: "reporter",
                    text: "transcript",
                }
            ],
        };
    }

    s({}) {
        // reset transcript
        var transcript = ""
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();

        // This runs when the speech recognition service starts
        recognition.onstart = function () {
            var talking = true
        };

        recognition.onspeechend = function () {
            // when user is done speaking
            recognition.stop();
            var talking = false
        };

        // This runs when the speech recognition service returns result
        recognition.onresult = (event) => {
            var transcript = event.results[0][0].transcript;
        };
        
        // start recognition
        recognition.start().then()
    }
    t({}) {
        return transcript
    }
}
Scratch.extensions.register(new ScratchFetch());

