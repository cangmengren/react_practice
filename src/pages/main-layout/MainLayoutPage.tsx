import Sider from 'antd/es/layout/Sider';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import LeftSider from './LeftSider';

export default function MainLayoutPage() {
  const navigate = useNavigate();

  const goPage = (pageInfo: any) => {
    console.log(pageInfo,'###############');
    if(pageInfo.key !== '1') {
      navigate('/help')
    } else {
      navigate('/about');
    }
  }

  return (
    <Layout style={{ height: '100vh'}}>
      <Header style={{ backgroundColor: '#fff' }}>欢迎来到藏梦阁</Header>
      <Layout>
        <Sider style={{ backgroundColor: '#fff' }} width="25%">
          <LeftSider goPage={goPage}/>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
