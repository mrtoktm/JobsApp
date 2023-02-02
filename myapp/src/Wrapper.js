import React from "react";
import Router from "./Router";
import FavProvider from "./context/FavProvider";

const Wrapper = () => {
    return (
        <FavProvider>
            <Router />
        </FavProvider>
    )
}

export default Wrapper;