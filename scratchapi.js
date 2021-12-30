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
        const corsproxy = "https://crossorigin.me/"
        const url = corsproxy + "https://api.scratch.mit.edu/users/" + user + "/messages/count/"
        return fetch(url).then(response => response.text())
    }
}
Scratch.extensions.register(new ScratchAPI());

