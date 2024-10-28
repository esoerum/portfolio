import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";


export default function Layout(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div id="main-container">
            <header id="main-header" className="header">
                <h1>Portfolio</h1>
                <Navigation />
            </header>
            <main>
                {children}
            </main>
             <Footer />
        </div>
    );
}