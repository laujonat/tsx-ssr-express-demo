import React, { ReactElement } from "react";
import { ThemedStyledComponentsModule } from "styled-components";

declare namespace JSX {
    interface IntrinsicElements {
        div: React.HTMLAttributes<HTMLElement>;
    }
}

declare module "styled-components" {
    export interface ThemedStyledComponentsModule<T> {
        createGlobalStyle(
            strings: TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): React.ComponentClass;
    }

    export interface ServerStyleSheet {
        collectStyles(children: ReactElement<any>): ReactElement<any>;
        getStyleTags(): string;
        getStyleElement(): ReactElement<any>;
        createGlobalStyle(
            strings: TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): React.ComponentClass;
    }
}

export interface WindowInitData extends Window {
    data: {
        INITIAL_DATA: any;
    };
}


export interface IHelloWorldProps<Object> {
    data: Object;
}