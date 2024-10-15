import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <>
        <header className="header">
            <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
        </>
    );
}