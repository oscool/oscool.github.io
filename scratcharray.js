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
                                    "defaultValue": 0
                                },
                                "array": {
                                    "type": "string",
                                    "defaultValue": ""
                                }
                            }
                },
                {
                    opcode: "array_id_json",
                    blockType: "reporter",
                    text: "jItem [id] of [array]",
                    "arguments": {
                                "id": {
                                    "type": "number",
                                    "defaultValue": 0
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
   array_id_json({id,array}) {
        const arr = JSON.parse(array)
        const obj = arr[id]
        return JSON.stringify(obj)
   }
}
Scratch.extensions.register(new ScratchArray());
