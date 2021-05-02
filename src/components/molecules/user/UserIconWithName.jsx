import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg height={"160px"} width={"160px"} src={image} alt={name} />
      <SName>nuko</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: red;
`;
