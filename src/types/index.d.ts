import React, { ReactElement } from "react";
import { ThemedStyledComponentsModule } from "styled-components";

declare global {
    namespace NodeJS {
        // tslint:disable-next-line:no-empty-interface
        interface ReadableStream { }
    }
    interface WindowInterface extends Window {
        INITIAL_DATA: window.INITIAL_DATA;
    }
}



export interface IDesktopProps {
    data: Object;
}

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