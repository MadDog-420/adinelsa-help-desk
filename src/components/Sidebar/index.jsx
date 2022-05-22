import {
    Menu,
    Layout,
} from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './constants';
import './styles.scss';

const availableMenus = ['/dashboard'];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const location = useLocation();
    const navigate = useNavigate();
    const [pathName, setPathName] = useState('');

    const handleSelect = ({ key }) => {
        if (availableMenus.includes(key)) {
            navigate(key, { replace: true });
        }
    };

    useEffect(() => {
        setPathName(`/${location.pathname.split('/')[1]}`);
    }, [location]);

    return(
        <Layout.Sider
            breakpoint="lg"
            width={280}
            className={`sidebar-container ${collapsed && 'collapsed'}`}
            collapsedWidth="0"
            onCollapse={onCollapse}
        >
            <Menu
                mode="vertical"
                selectedKeys={[pathName]}
                onSelect={handleSelect}
                items={menuItems}
            />
        </Layout.Sider>
    )
}

export default Sidebar;