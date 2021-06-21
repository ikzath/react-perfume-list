import styled from 'styled-components';

export const SelectWrapper = styled.div`
    margin-right: 10px;
    `

export const Select = styled.select`
  width: 25%;
  height: 60px;
  background: yellow;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    background-color: whitesmoke;
  }
`;