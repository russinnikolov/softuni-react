import PublicLayout from "../Layout/PublicLayout";
import {Card, Carousel, Col, Collapse, Row} from 'antd';

const Home = () => {
	const contentStyle = {
		height: '160px',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
		margin: 5
	};

	const { Panel } = Collapse;

	return (
		<PublicLayout>
			<Carousel autoplay>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>

			<Row gutter={16} style={{marginTop: 20, marginBottom: 20}}>
				<Col span={8}>
					<Card title="One Thing" bordered={false}>
						Info about the one thing.
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Two Thing" bordered={false}>
						Info about the two thing.
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Three Thing" bordered={false}>
						Info about the three thing.
					</Card>
				</Col>
			</Row>
			<Collapse accordion style={{marginBottom: 20}}>
				<Panel header="Whant else" key="1">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</Panel>
				<Panel header="And more" key="2">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</Panel>
				<Panel header="More and else" key="3">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</Panel>
			</Collapse>
		</PublicLayout>
	);

}

export default Home;