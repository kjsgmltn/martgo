import { info } from "console";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  color: white;
  min-width: 120px;

  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background-color: ${(props) => props.color || "blue"};

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택이 가능합니다. */
  &:hover {
    background-color: white;
    color: black;
  }
  & + button {
    margin-left: 1rem;
  }
`;

const Info = (props: any) => {
  const { text, msg } = props;
  console.log(msg);
  return <div></div>;
};
const Warning = (text: any, msg: any) => {
  return <div>Warning</div>;
};
const Error = (text: any, msg: any) => {
  return <div>Error</div>;
};

const getStatus = (text: any, msg: any) => {
  console.log(text);
  console.log(msg);

  return {
    info: <Info text={text} msg={msg} />,
    warning: <Warning text={text} msg={msg} />,
    error: <Error text={text} msg={msg} />,
  };
};

const App = () => {
  return <div> {getStatus("bbb", "ccc")["info"]}공백확인</div>;
};

export default App;
