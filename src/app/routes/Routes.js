import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Contacts from "../../scenes/contacts/Contacts";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "contacts", element: <Contacts /> },
        ]

    },
   
];

export const router = createBrowserRouter(routes);