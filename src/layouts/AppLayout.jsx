import { Outlet, Link } from "react-router-dom";

function AppLayout() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Film</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )}

export default AppLayout;