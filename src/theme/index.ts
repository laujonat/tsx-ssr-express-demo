import * as _ from "styled-components";
import { ThemedStyledInterface } from "styled-components";
import { themes } from "react95";

const {
    default: styled,
    css,
    keyframes,
    createGlobalStyle,
    ThemeProvider,
    ServerStyleSheet
} = _ as _.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
    theme?: Object;
}

export type Theme = typeof themes.default;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet };
export default styled as ThemedStyledInterface<Theme>;