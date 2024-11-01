import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div>
            <Header /> {/* Reusable header component */}
            <main>{children}</main> {/* Main content changes per page */}
        </div>
    );
}

export default Layout;