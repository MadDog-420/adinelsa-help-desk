import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';

const { Content } = Layout;

const HeaderComponent = ({
    userInformation, setUserInformation, children
}) => {
    const [collapsedResponsive, setCollapsedResponsive] = useState(true);

    return (
      <div className="overflow-hidden vh-100">
        <Layout>
          <Sidebar
            collapsedResponsive={collapsedResponsive}
            userInformation={userInformation}
            setUserInformation={setUserInformation}
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