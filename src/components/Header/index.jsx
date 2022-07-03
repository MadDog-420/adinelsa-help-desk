import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';

const { Content } = Layout;

const HeaderComponent = ({
  setLoginState, userInformation, setUserInformation, children, rol,
}) => {
    const [collapsedResponsive] = useState(true);

    return (
      <div className="overflow-hidden vh-100">
        <Layout>
          <Sidebar
            setLoginState={setLoginState}
            collapsedResponsive={collapsedResponsive}
            userInformation={userInformation}
            setUserInformation={setUserInformation}
            rol={rol}
          />
          <Layout>
            <Content className="children-container">
              <div className="main-content">
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
}

export default HeaderComponent;