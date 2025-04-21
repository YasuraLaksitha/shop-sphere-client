import { useDispatch, useSelector } from "react-redux";
import { ProductDispatch, ProductRootState } from "./ConfigStore";

export const useProductDispatch = useDispatch.withTypes<ProductDispatch>();
export const useProductSelector = useSelector.withTypes<ProductRootState>()