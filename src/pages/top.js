import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export const Top = () => {
    return (
        <NavLink to="/homes">
            <h1>home</h1>
        </NavLink>
    );
}