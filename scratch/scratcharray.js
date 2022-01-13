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
                },
                {
                    opcode: "array_len",
                    blockType: "reporter",
                    text: "Length of [array]",
                    "arguments": {
                                "array": {
                                    "type": "string",
                                    "defaultValue": ""
                                }
                            }
                },
                {
                    opcode: "json_val",
                    blockType: "reporter",
                    text: "Get value [val] of [json]",
                    "arguments": {
                                "json": {
                                    "type": "string",
                                    "defaultValue": ""
                                },
                                "val": {
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
   array_len({array}) {
        const arr = JSON.parse(array)
        return arr.length
   }
   json_val({val,json}) {
        const j = JSON.parse(json)
        return j[val]
   }
}
Scratch.extensions.register(new ScratchArray());
