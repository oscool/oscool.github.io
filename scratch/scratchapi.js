class ScratchAPI {
    constructor() {
        this.corsproxy = "https://cors-anywhere.herokuapp.com/"
    }
    getInfo() {
        return {
            id: "scratchAPI",
            name: "Scratch API",
            color1: '#ffc300',
            color2: '#ffc300',
            blocks: [
                {
                    opcode: "user_msg_count",
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
                    opcode: "user_profile",
                    blockType: "reporter",
                    text: "Get [user]'s User Profile",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                            }
                },
                {
                    opcode: "user_favs",
                    blockType: "reporter",
                    text: "Get [user]'s Favourites",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                            }
                },
                {
                    opcode: "user_followers",
                    blockType: "reporter",
                    text: "Get [user]'s Followers with limit [limit] and offset of [offset]",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                                "limit":{
                                    "type": "number",
                                    "defaultValue": 20
                                },
                                "offset":{
                                    "type": "number",
                                    "defaultValue": 20
                                }
                            }
                },
                {
                    opcode: "user_following",
                    blockType: "reporter",
                    text: "Get [user]'s Following with limit [limit] and offset of [offset]",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                                "limit":{
                                    "type": "number",
                                    "defaultValue": 20
                                },
                                "offset":{
                                    "type": "number",
                                    "defaultValue": 20
                                }
                            }
                },
                {
                    opcode: "user_projects",
                    blockType: "reporter",
                    text: "Get [user]'s Projects",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                            }
                },
                {
                    opcode: "user_project",
                    blockType: "reporter",
                    text: "Get [user]'s Project [id]",
                    "arguments": {
                                "user": {
                                    "type": "string",
                                    "defaultValue": "OS_Cool_"
                                },
                                "id": {
                                    "type": "number",
                                    "defaultValue": 588007972
                                }
                            }
                },
                {
                    opcode: "proxy_featured",
                    blockType: "reporter",
                    text: "Get Featured Projects"
                },
                {
                    opcode: "news",
                    blockType: "reporter",
                    text: "Get News"
                }
            ],
        };
    }

    user_msg_count({user}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/messages/count/"
        return fetch(url).then(response => response.text())
    }
    user_profile({user}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user
        return fetch(url).then(response => response.text())
    }
    user_favs({user}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/favorites/"
        return fetch(url).then(response => response.text())
    }
    user_followers({user,limit,offset}) {
        limit = limit.toString()
        offset = offset.toString()
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/followers?limit=" + limit + "&offset=" + offset
        return fetch(url).then(response => response.text())
    }
    user_following({user,limit,offset}) {
        limit = limit.toString()
        offset = offset.toString()
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/following?limit=" + limit + "&offset=" + offset
        return fetch(url).then(response => response.text())
    }
    user_projects({user}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/projects/"
        return fetch(url).then(response => response.text())
    }
    user_project({user,id}) {
        id = id.toString()
        const url = this.corsproxy + "https://api.scratch.mit.edu/users/" + user + "/projects/" + id
        return fetch(url).then(response => response.text())
    }
    proxy_featured({}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/proxy/featured"
        return fetch(url).then(response => response.text())
    }
    news({}) {
        const url = this.corsproxy + "https://api.scratch.mit.edu/news"
        return fetch(url).then(response => response.text())
    }
}
Scratch.extensions.register(new ScratchAPI());

