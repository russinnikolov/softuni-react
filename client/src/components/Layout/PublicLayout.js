import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Layout } from 'antd';

const { Content } = Layout;

const PublicLayout = ({children}) => {

	return (
		<>
			<Header />
			<Content>
				{children}
			</Content>
			<Footer />
		</>
	);
}

export default PublicLayout;