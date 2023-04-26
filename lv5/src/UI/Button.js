import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;

  height: ${(props) => (props.size === 'medium' ? '30px' : '20px')};

  width: ${(props) => (props.size === 'medium' ? '80px' : '60px')};

  background-color: ${(props) =>
    props.color === 'green' ? 'rgb(85, 239, 196)' : 'rgb(250, 177, 160)'};

  color: ${(props) =>
    props.color === 'green' ? 'rgb(0, 0, 0)' : 'rgb(214, 48, 49)'};

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 0.5px;
  }

  &:disabled {
    cursor: default;
    background-color: gray;
  }
`;
export default Button;
