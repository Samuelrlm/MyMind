import React from "react";
import { PageBase } from "../../components/PageBase";
import PlayForm from "./components/PlayForm";

export default function GameConfig({route, mode = "single"}) {
    if (route.params && route.params.mode) {
        mode = route.params.mode;
    }

    return (
        <PageBase
            navBar={false}
            headerPage={true}
            headerTitle="Modo de Jogo"
            selectedtab={"newgame"}
        >
            <PlayForm selectedMode={mode} />
        </PageBase>
    )
}