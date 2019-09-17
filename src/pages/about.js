import React from 'react';
import { Row, Col, Icon, Collapse } from 'antd';
import './about.css';

const Panel = Collapse.Panel;

export default () => (
  <Row>
    <Col
	    lg={{ span: 14, offset: 5 }}
	    md={{ span: 14, offset: 5 }}
	    xs={{ span: 24 }}
	    className="about-wrapper"
    >
			<Collapse defaultActiveKey={['1']}>
			  <Panel header="关于我" key="1">
	      	<p><Icon type="user" /> 姓名：李坤/男</p>
	      	<p style={{marginTop: 20}}><Icon type="environment" /> 所在地：杭州</p>
	      	<p style={{marginTop: 20}}><Icon type="idcard" /> 关键词：前端，宅</p>
	      	<p style={{marginTop: 20}}><Icon type="global" /> 毕业院校：武汉软件工程职业学院/计算机与网络应用</p>
					<p style={{marginTop: 20}}><Icon type="flag" /> 尝试使用 umi + antd + react + issue + es6 搭建一个记录个人生活信息的博客环境,后续可能会扩展，具体需要完善项目暂未确定。</p>
			  </Panel>
			  <Panel header="我的简历" key="2">
			  	<p>嘿！你好，这是<a href="xxx" target="_blank" rel="noopener noreferrer">在线简历<Icon type="export" /></a>！(xx更新)</p>
			  </Panel>
			  <Panel header="联系我" key="3">
	      	<p><Icon type="mail" /> 邮箱：466940702@qq.com</p>
					<p style={{marginTop: 20}}>
						<Icon type="github" /> Github：
						<a href="https://github.com/likun123" target="_blank" rel="noopener noreferrer">likun123</a>
					</p>
			  </Panel>
			</Collapse>
    </Col>
  </Row>
)