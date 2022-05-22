import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../../routes/routesList';
import MakeRouteWithSubRoutes from '../../routes';

function CustomLayout(props) {
    return (
        [
            <div key="layout-view" className="h-100">
                <Router>
                    <Routes>
                        {
                            routes.map((route) => (
                                <Route path={route.path} key={route.path} element={(
                                    <MakeRouteWithSubRoutes
                                        key={route.path}
                                        component={route.component}
                                        path={route.path}
                                        title={route.title}
                                        type={route.type}
                                        {...props}
                                    />
                                )}>
                                </Route>
                            ))
                        }
                    </Routes>
                </Router>
            </div>
        ]
    )
}

export default CustomLayout;