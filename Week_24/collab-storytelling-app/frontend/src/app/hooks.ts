import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useEffect, useState } from "react";
import { setCredentials  } from "../features/authSlice";
import { refreshAccessToken, getCurrentUser } from "../services/api";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useAuthRefresh() {
    const [isChecking, setIsChecking] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function checkAuth() {
            try {
                //step1: try to refresh the token using http-only cookie
                const tokenData = await refreshAccessToken();

                // step2: use the new token to get current user info
                const userData = await getCurrentUser(tokenData.accessToken);

                // step3: store credentials in redux
                dispatch(setCredentials({
                    user: userData,
                    accessToken: tokenData.accessToken,
                }));

                console.log('Session restored successfully');
            } catch (error) {
                // No valid refresh token, user needs to login
                console.log('No valid session found, please login');
            } finally {
                setIsChecking(false);
            }
        }
        checkAuth();
    }, [dispatch]);
    return isChecking;
}
