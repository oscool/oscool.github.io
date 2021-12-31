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
                    text: "Get [user]'s Message Count",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                            }
                },
                {
                    opcode: "user",
                    blockType: "reporter",
                    text: "Get [user]",
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
        const corsproxy = "https://cors-anywhere.herokuapp.com/"
        const url = corsproxy + "https://api.scratch.mit.edu/users/" + user + "/messages/count/"
        return fetch(url).then(response => response.text())
    }
    user({user}) {
        const corsproxy = "https://cors-anywhere.herokuapp.com/"
        const url = corsproxy + "https://api.scratch.mit.edu/users/" + user
        return fetch(url).then(response => response.text())
    }
}
Scratch.extensions.register(new ScratchAPI());

