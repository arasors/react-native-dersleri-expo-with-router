import {Slot} from "expo-router";
import {Provider} from "../context/auth";

export const unstable_settings = {
    initialRouteName: "index",
};

export default function MainLayout(){

    return(
        <Provider>
            <Slot />
        </Provider>
    )
}
