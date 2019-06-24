import * as _ from "styled-components";

const {
    default: styled,
    css,
    keyframes,
    createGlobalStyle,
    ThemeProvider,
    ServerStyleSheet
} = _ as _.ThemedStyledComponentsModule<
    IThemeInterface
>;

export interface IThemeInterface {
    primaryColor: string;
    default?: any;
}

export const theme = {
    primaryColor: "#e9e9eb"
};

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet };
export default styled;