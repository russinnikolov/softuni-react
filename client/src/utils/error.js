import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const error = (message) => {
	const MySwal = withReactContent(Swal)

	MySwal.fire({
		title: "Error",
		icon: "error",
		text: message
	});
}