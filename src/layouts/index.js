import {Layout} from 'antd';
import Header from '../components/header/header';
import styles from './index.css';

const {Footer ,Content} = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.wrap}>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
      { props.children }
      </Content>
      <Footer className={styles.footer}>Copyright © 飘扬de花语 2019 </Footer>
    </Layout>
  );
}

export default BasicLayout;
