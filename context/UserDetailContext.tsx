import { createContext } from "vm";

export const UserDetailContext = createContext({
    userDetail:undefined,
    setUserDetail: () =>{}
})