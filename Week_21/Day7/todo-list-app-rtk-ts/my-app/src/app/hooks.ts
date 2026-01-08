// Add typed Redux hooks
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// You’ll write useAppDispatch() and useAppSelector(...)
// and TypeScript will “just know” your store types everywhere. Less boilerplate, fewer mistakes.