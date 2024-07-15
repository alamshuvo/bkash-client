import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";


const MainLayout = () => {
    return (
        <body>
            <header>
              <Nav></Nav>
            </header>
            <main>
                {Outlet}
            </main>
            <footer>

            </footer>
        </body>
    );
};

export default MainLayout;