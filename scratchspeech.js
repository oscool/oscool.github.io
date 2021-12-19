class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Fetch",
            "name": "Fetch",
            "blocks": [
                        {
                            "opcode": "s",
                            "blockType": "operator",
                            "text": "Speech Recognization"
                        }
                ]
        };
    }
	
		s({}) {
				// new speech recognition object
				var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
				var recognition = new SpeechRecognition();

				// This runs when the speech recognition service starts
				recognition.onstart = function() {
						
				};

				recognition.onspeechend = function() {
						// when user is done speaking
						recognition.stop();
				}

				// This runs when the speech recognition service returns result
				recognition.onresult = function(event) {
					var transcript = event.results[0][0].transcript;
					var confidence = event.results[0][0].confidence;
					return transcript
				};

				// start recognition
				recognition.start();
		}
}
Scratch.extensions.register(new ScratchFetch())
