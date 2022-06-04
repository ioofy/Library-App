import { useDispatch } from "react-redux";
import { getToken } from "utils/getToken";
import { Link } from "react-router-dom";
// import { defaultState } from 'app/state/authSlice';
import loadable from "@loadable/component";
import * as BoxIcons from "react-icons/bi";

const Content = loadable(
  () => import("components/ContentInside/ContentInside")
);
const TopHeader = loadable(() => import("../TopHeader"));

type ContentProps = {
  children: React.ReactNode;
};

const SideBar: React.FC<ContentProps> = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    // remove auth token
    sessionStorage.removeItem("jwt");
    // remove persist redux root into null
    localStorage.removeItem("persist:root");
    // with refresh
    window.location.href = "/auth/login";
    // dispatch to default state from redux
    dispatch({ type: "DEFAULT_STATE" });
  };

  return (
    <>
      <TopHeader />
      <div className="flex flex-row">
        <nav
          className="bg-gray-100 w-80 z-20
        justify-between flex flex-col"
        >
          {getToken ? (
            <div>
              <div className="mt-20 flex items-center justify-center">
                <ul>
                  <li className="mb-8">
                    <a href="/dashboard" className="flex">
                      <span>
                        <BoxIcons.BiHomeAlt size={29} />
                      </span>
                      <span className="ml-4 text-lg" style={{ marginTop: 3 }}>
                        Dashboard
                      </span>
                    </a>
                  </li>
                  <li className="mb-8">
                    <a href="/books" className="flex">
                      <span>
                        <BoxIcons.BiBook size={29} />
                      </span>
                      <span className="ml-4 text-lg" style={{ marginTop: 3 }}>
                        List Books
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className="flex items-center justify-center mt-20 bg-blue-500 p-4 text-white">
              <Link to="/auth/login">Login to see content</Link>
            </button>
          )}

          {getToken && (
            <div className="cursor-pointer bg-blue-600 h-12" onClick={signOut}>
              <div className="flex items-center justify-center mt-2 text-white">
                <span>
                  <BoxIcons.BiLogOut size={29} />
                </span>
                <span
                  className="ml-4 text-lg font-semibold"
                  style={{ marginTop: 3 }}
                >
                  Log Out
                </span>
              </div>
            </div>
          )}
        </nav>
        <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <Content>{props.children}</Content>
        </div>
      </div>
    </>
  );
};

export default SideBar;
