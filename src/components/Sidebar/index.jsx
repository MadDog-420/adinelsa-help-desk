import {
  Menu,
  Layout,
  Image,
  Skeleton,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems, footerItems } from './constants';
import  Logo from '../../media/adinelsa-logo.png';
import './styles.scss';
import { PropTypes } from 'prop-types';
import { homePage } from './../../routes/routesList';
import { defaultMenus } from './siderMenus';
import { AppContext } from './../../context/index';
import { logout } from '../../utils/tools';

const selectedKeys = (pathName, rol) => {
  const selectKeysList = [pathName];
  if (pathName === homePage(rol).path) {
    defaultMenus(rol).forEach((item) => {
      if (item.name.includes(homePage(rol).name)) {
        selectKeysList.push(item.key);
      }
    });
  }
  return selectKeysList;
}

const Sidebar = (props) => {
  const { rol, setLoginState } = props;
  const { dispatch } = useContext(AppContext);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [pathName, setPathName] = useState('');

  const handleSelect = ({ key }) => {
    if (key === 'logout') {
      logout(setLoginState);
    } else {
      navigate(key, { replace: true });
    }
  };

  useEffect(() => {
    setPathName(`/${location.pathname.split('/')[1]}`);
  }, [location]);

  return(
    <Layout.Sider
      breakpoint="lg"
      width={260}
      className={`sidebar-container ${collapsed && 'collapsed'}`}
      collapsedWidth="0"
      onCollapse={onCollapse}
    >
      <div className="sider-header py-2 mr-2">
        <div className="logo pl-2">
          <Image src={Logo} width={120} preview={false} />
        </div>
        <div className="profile pr-2">
          <UserOutlined />
        </div>
      </div>
      {
        rol ? (
          <Menu
            className="mt-2"
            mode="vertical"
            selectedKeys={selectedKeys(pathName, rol)}
            onSelect={handleSelect}
            items={menuItems(rol)}
          />
        ) : (<Skeleton active />)
      }
      
      <div className="sider-footer">
        <Menu
          className="mt-2"
          mode="vertical"
          selectedKeys={[pathName]}
          onSelect={handleSelect}
          items={footerItems}
        />
      </div>
    </Layout.Sider>
  )
}

Sidebar.propTypes = {
  rol: PropTypes.string,
  setLoginState: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  rol: undefined,
};

export default Sidebar;