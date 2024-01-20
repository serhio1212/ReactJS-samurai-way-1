import { reTree } from "../render";

let StateJS={
    ProfilePage: {
        PostsData: [
            {
                id: 0,
                message: "Hi evereone",
                likesdata: "Fantastic post",
                dislikesdata: "",
                likescount: "1",
                dislikescount: "0"
            },
            {
                id: 1,
                message: "My first post",
                likesdata: "",
                dislikesdata: "No matter",
                likescount: "0",
                dislikescount: "1"
            },
            {
                id: 2,
                message: "Battle",
                likesdata: "Go, Im ready",
                dislikesdata: "",
                likescount: "1",
                dislikescount: "0"
            }
        ]
    },
    MessagePage: {
        DialogsData: [
            { id: 0, idAcc: 0, name: 'MegaStars' },
            { id: 1, idAcc: 1, name: 'Mama' },
            { id: 2, idAcc: 2, name: 'Mihail' },
            { id: 3, idAcc: 3, name: 'Yuliya' },
            { id: 4, idAcc: 4, name: 'Ekaterina' }
        ],
        MessagesData: [
            { id: 0, idChat: 1, idAcc: 1, message: 'Hi' },
            { id: 1, idChat: 1, idAcc: 0, message: 'How is your it-kamasutra?' },
            { id: 2, idChat: 0, idAcc: 0, message: 'Yo' },
            { id: 3, idChat: 0, idAcc: 3, message: 'Shadap' },
            { id: 4, idChat: 0, idAcc: 0, message: ':(' },
            { id: 5, idChat: 3, idAcc: 3, message: 'I`m here!' },
            { id: 6, idChat: 4, idAcc: 4, message: 'Ho-ho!' },
            { id: 7, idChat: 1, idAcc: 1, message: 'Good!' },
            { id: 8, idChat: 1, idAcc: 0, message: 'Nice!' }
        ]
    },
    MessageTextData: { InitText: "" },
    sidebar: {
        perusers: [{ id: 0, idAcc: 1, name: 'Mama' },
            { id: 1, idAcc: 2, name: 'Mihail' },
            { id: 2, idAcc: 3, name: 'Yuliya' },
            { id: 3, idAcc: 4, name: 'Ekaterina' }]
    }
};

export function AddPost(text, idAcc) {
    let valID=0
    Object.entries(StateJS.MessagePage.MessagesData).map((maxI) => ++valID - 1);

    let newPost={
        id: valID,
        idChat: idAcc,
        idAcc: idAcc,
        message: StateJS.MessageTextData.InitText
    };

    return (<>
            {(StateJS.MessageTextData.InitText !== "") ? StateJS.MessagePage.MessagesData.push(newPost) : console.log("Text not input")}
            {StateJS.MessageTextData.InitText = ""}
            {reTree(StateJS, AddPost, StateJS.MessageTextData, updateText)}
        </>
    )
}


export function updateText(upText) {

    return (<>
            {StateJS.MessageTextData.InitText=upText}
            {console.log("updateText")}
            {reTree(StateJS, AddPost, StateJS.MessageTextData, updateText)}
        </>
    )
}

export default StateJS;
