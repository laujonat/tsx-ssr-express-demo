import React from "react";
import { Window, WindowContent, Fieldset } from "react95";

interface WindowProps {
    greeting: string;
}

export function WindowContainer(prop: WindowProps): JSX.Element {
    return (
        <Window>
            <WindowContent>
                <Fieldset>{prop.greeting}</Fieldset>
            </WindowContent>
        </Window>
    );
}
