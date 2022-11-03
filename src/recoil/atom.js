import { atom } from "recoil";

export const user = atom({
    key: "user",
    default: {
        id: "",
        email: "",
        accountId: "",
        password: "",
        userName: "",
        department: "",
        coreTimeStart: "",
        coreTimeEnd: "",
        position: "",
        role: ""
    }
})