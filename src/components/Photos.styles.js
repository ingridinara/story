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

export const StyledImg = styled.img`
  display: flex;
  animation: fadeIn ease 8s;
  -webkit-animation: fadeIn ease 8s;
  -moz-animation: fadeIn ease 8s;
  -o-animation: fadeIn ease 8s;
  -ms-animation: fadeIn ease 8s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const StyledWapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
