class ScratchAPI {
    constructor() {}
    getInfo() {
        return {
            id: "scratchAPI",
            name: "Scratch API",
            blocks: [
                {
                    opcode: "array_id",
                    blockType: "reporter",
                    text: "Item [id] of [array]",
                    "arguments": {
                                "id": {
                                    "type": "number",
                                    "defaultValue": 1
                                },
                                "array": {
                                    "type": "string",
                                    "defaultValue": ""
                                }
                            }
                }
            ],
        };
    }

   array_id({id,array}) {
        return JSON.parse(array)[id]
    }
}
Scratch.extensions.register(new ScratchAPI());
