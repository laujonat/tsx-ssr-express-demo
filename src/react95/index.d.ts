import React from "react";

declare module "react95" {
    export const Count: React.ComponentElement<{
        children: string;
    }>;
    export const List: React.ComponentElement<{
        children: any;
    }>;
    export const ListItem: React.ComponentElement<{
        children: string;
        disabled?: boolean;
    }>;
}