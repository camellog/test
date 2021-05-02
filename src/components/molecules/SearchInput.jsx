import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContaienr>
      <Input placeholder="検索条件を入力" />
      <SBttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SBttonWrapper>
    </SContaienr>
  );
};

const SBttonWrapper = styled.div`
  padding-left: 8px;
`;

const SContaienr = styled.div`
  display: flex;
  align-items: center;
`;
