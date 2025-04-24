import {useDispatch, useSelector} from "react-redux";
import {RootState, RootDispatcher} from "./ConfigStore";

export const useRootDispatch = useDispatch.withTypes<RootDispatcher>();
export const useRootSelector = useSelector.withTypes<RootState>();