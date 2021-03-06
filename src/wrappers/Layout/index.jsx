import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../../routes/routesList';
import MakeRouteWithSubRoutes from '../../routes';
import AppContextProvider from '../../context';
import NoAccessView from './../../views/NoAccess';
import './styles.scss';

function CustomLayout(props) {
  const { isLogin, setLoginState } = props;
  const [rol, setRol] = useState();
  return (
    [
      <div key="layout-view" className="vh-100">
        <AppContextProvider setLoginState={setLoginState} setRol={setRol}>
          <Router>
            <Routes>
              {
                routes(rol).map((route) => (
                  <Route path={route.path} key={route.path} element={(
                    <MakeRouteWithSubRoutes
                      key={route.path}
                      component={route.component}
                      path={route.path}
                      title={route.title}
                      type={route.type}
                      rol={rol}
                      isLogin={isLogin}
                      setLoginState={setLoginState}
                      {...props}
                    />
                  )}>
                  </Route>
                ))
              }
              <Route path="*" element={<NoAccessView />} />
            </Routes>
          </Router>
        </AppContextProvider>
      </div>
    ]
  )
}

export default CustomLayout;