import {
    Menu,
    Layout,
    Image,
    Select,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './constants';
import  Logo from '../../media/adinelsa-logo.png';
import './styles.scss';
import routesDictionary from '../../routes/routesDict';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const location = useLocation();
    const navigate = useNavigate();
    const [pathName, setPathName] = useState('');

    const handleSelect = ({ key }) => {
        navigate(key, { replace: true });
    };

    const goToSpecialForm = (value) => {
        navigate(routesDictionary.specialForm.router, { state: { form: value }});
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
            <Menu
                className="mt-2"
                mode="vertical"
                selectedKeys={[pathName]}
                onSelect={handleSelect}
                items={menuItems}
            />
            <div className="sider-footer py-3 mr-3">
                <Select placeholder="Selecciona un formulario" size="large" onChange={(value) => goToSpecialForm(value)}>
                    <Select.Option value='1'>Lectura de Medidor</Select.Option>
                    <Select.Option value='2'>Lista de Órdenes</Select.Option>
                </Select>
            </div>
        </Layout.Sider>
    )
}

export default Sidebar;