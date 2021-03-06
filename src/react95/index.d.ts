import { number } from "prop-types";

declare module "react95" {
    export import List = React95.List;
    export import ListItem = React95.ListItem;
    export import AppBar = React95.AppBar;
    export import Toolbar = React95.Toolbar;
    export import TextField = React95.TextField;
    export import Button = React95.Button;
    export import Divider = React95.Divider;
    export import Window = React95.Window;
    export import WindowContent = React95.WindowContent;
    export import Fieldset = React95.Fieldset;

    export import themes = themes;
}

declare namespace React95 {
    // import * as CSS from "csstype";

    type StyleProps = typeof React.CSSProperties;

    interface ListItemPropTypes {
        children?: JSX.Element | string;
    }

    interface AppBarPropTypes {
        children?: JSX.Element[] | JSX.Element;
    }

    interface ToolbarPropTypes extends Partial<{style: StyleProps}> {
        children?: JSX.Element[] | JSX.Element;
    }

    interface TextFieldPropTypes extends Partial<{style: StyleProps}> {
        children?: ReactChild;
    }

    interface ButtonPropTypes {
        children: string | JSX.Element;
        active: boolean;
        style: CSSProperties;
        onClick: () => void;
    }

    interface DividerPropTypes {
        children?: undefined;
    }

    interface IWindowInterface {
        children: JSX.Element[];
        style?: React.CSSProperties;
    }

    interface IWindowContentInterface {
        children: JSX.Element[] | JSX.Element;
        style?: React.CSSProperties;
    }

    interface IFieldSetInterface {
        children: JSX.Element[] | JSX.Element | string;
        style?: React.CSSProperties;
    }

    interface WindowPropTypes extends IWindowInterface  {
        children: JSX.Element[] | JSX.Element;
    }

    interface WindowContentPropTypes extends IWindowContentInterface {
        children: JSX.Element;
    }

    interface FieldsetPropTypes extends IFieldSetInterface {
        children: string;
    }


    interface IListInterface {
        children?: JSX.Element[] | JSX.Element;
        style?: React.CSSProperties;
    }

    interface SomeVersionListPropTypes extends IListInterface {
        children?: JSX.Element[];
        style?: React.CSSProperties;
        horizontalAlign: string;
        verticalAlign: string;
        onClick?: () => void;
    }

    export function List(T: SomeVersionListPropTypes): JSX.Element { }
    export function ListItem(T: ListItemPropTypes): JSX.Element { }
    export function TextField(T: TextFieldPropTypes): JSX.Element { }
    export function Button(T: ButtonPropTypes): JSX.Element { }
    export function Divider(T: DividerPropTypes): JSX.Element { }
    export function Window(T: WindowPropTypes): JSX.Element { }
    export function WindowContent(T: WindowContentPropTypes): JSX.Element { }
    export function Fieldset(T: FieldsetPropTypes): JSX.Element { }

    export class AppBar extends React.Component<AppBarPropTypes> { }
    export class Toolbar extends React.Component<ToolbarPropTypes> { }

    export const themes: Object;
}
