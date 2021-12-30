class ScratchAPI {
    constructor() {}
    getInfo() {
        return {
            id: "scratchAPI",
            name: "Scratch API",
            blocks: [
                {
                    opcode: "msg_count",
                    blockType: "reporter",
                    text: "Message Count of [user]",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                            }
                }
            ],
        };
    }

    msg_count({user}) {
        const headers = {
            "meathod": "GET",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Language": "en"
        }
        const corsproxy = "http://alloworigin.com/get?url="
        const url = corsproxy + "https://api.scratch.mit.edu/users/" + user + "/messages/count/"
        return fetch(url, headers).then(response => response.text())
    }
}
Scratch.extensions.register(new ScratchAPI());

