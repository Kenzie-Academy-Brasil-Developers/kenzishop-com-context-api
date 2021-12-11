import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #808080;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;

  img {
    display: block;
    width: 80px;
    height: 80px;
  }
`;

export const Text = styled.div`
  margin-left: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-weight: 700;
  margin-right: 5px;
`;
