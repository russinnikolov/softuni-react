import { Link } from "react-router-dom";

import { Col, Row } from 'antd';

const Home = () => {
	return (
		<>
			<Row>
				<Col span={4}><Link to={"/"} > Hey</Link></Col>
			</Row>
		</>
	);

}

export default Home;