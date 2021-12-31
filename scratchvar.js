class ScratchVar {
    constructor(runtime) {
        this.runtime = runtime
    }
    getInfo() {
        return {
            id: "scratchvar",
            name: "Scratch Var",
            blocks: [
                {
                    opcode: "new",
                    blockType: "command",
                    text: "New Variable called [name]",
                    arguments: {
                      name: {
                        type: "string"
                      }
                    }
                }
            ],
        };
    }

    new({name}) {
        this.runtime.createNewGlobalVariable(name)
    }
}
Scratch.extensions.register(new ScratchVar());
