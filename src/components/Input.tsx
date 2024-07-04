import styled from "styled-components";
import Block from "./Block";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

const InputComponent = (props: InputProps) => {
  const { left, right, className } = props;
  return (
    <Block className={`bg-white rounded-md shadow-md px-2 py-2 ${className}`}>
      {left}
      <Input {...props} />
      {right}
    </Block>
  );
};

const Input = styled.input`
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  border-radius: 0.6rem;
  font-size: 1rem;
  padding: 0.8rem;
  &:focus {
    outline: none;
  }
`;

export default InputComponent;
