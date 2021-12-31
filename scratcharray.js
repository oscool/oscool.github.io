class ScratchArray {
    constructor() {}
    getInfo() {
        return {
            id: "scratchArray",
            name: "Scratch Array",
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
        const arr = JSON.parse(array)
        return arr[id]
    }
}
Scratch.extensions.register(new ScratchArray());
