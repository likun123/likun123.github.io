
import styles from './header.less';
import React from 'react';
import {Link} from 'react-router-dom';
import {Layout,Row,Col} from 'antd';
import Logo from '../../assets/logo.png';
import Navigate from './navigate/navigate';

const {Header} = Layout;

export default function() {
  return (
    <Header className={styles.wrapper}>
      <Row>
        <Col
          lg={{ span: 5, offset: 5}}
          md={{ span: 5, offset: 5}}
          xs={{ span:0 }}
        >
          <Link to='/' className={styles.logo}>
            <img alt="logo" src={Logo} />
          </Link>
        </Col>

        
        <Col
		    lg={{ span: 9 }}
		    md={{ span: 9 }}
		    xs={{ span: 24 }}
	    >
	      <Navigate></Navigate>
	    </Col>
      </Row>
    </Header>
  );
}
