import styled from 'styled-components';
import { RotateLeft } from '@material-ui/icons';
import Colors from '../Theme/Colors';

export const StyledRotateLeft = styled(RotateLeft)`
//height: 100vh; //no se carga aqui
//width: 100vw;
//font-size: 300px;
color:  ${Colors.pink};

//background-color: linear-gradient(50dg, #ee9032, #f16d52, #ec4a77, #a063aa, #7963aa, #4b6eb5, #109aaf, #07b89f, #6bb97f);

	animation: rotation 0.7s ease-in-out infinite;
@keyframes rotation {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(00deg);
		}
`;
