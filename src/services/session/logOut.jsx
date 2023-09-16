import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLogin } from "../../store/slices/loginSlice";

export function logOut() {

    const dispatch = useDispatch();

    async function handleLogin() {
        await AsyncStorage.removeItem("@user");
        dispatch(setLogin(false));
    }

    handleLogin();

};