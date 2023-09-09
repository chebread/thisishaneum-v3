import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import NotFoundPage from 'pages/NotFoundPage';
import Bowser from 'bowser';
import { useRef } from 'react';
import ForbiddenPage from 'pages/ForbiddenPage';
// import CustomCursor from 'components/CustomCursor';

const Router = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const browserName: any = useRef(browser.getBrowserName());
  const isIe = browserName.current === 'Internet Explorer';

  const forbiddenRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="*" element={<ForbiddenPage />} />
      </Route>
    )
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            {/* <CustomCursor /> */}

            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="c" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={isIe ? forbiddenRouter : router} />;
};

export default Router;
