import { createContext, Dispatch, SetStateAction } from "react";

export const UserDetailContext = createContext<{
    userDetail: undefined | Record<string, unknown>;
    setUserDetail: Dispatch<SetStateAction<undefined>>;
}>({
    userDetail: undefined,
    setUserDetail: () => {}
})