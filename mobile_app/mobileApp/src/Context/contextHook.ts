import { useContext } from "react";
import { ContextInfo } from "./UserInfoContext";

export const useContextInfo = () => useContext(ContextInfo);
