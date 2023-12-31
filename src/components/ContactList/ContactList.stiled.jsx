import styled from '@emotion/styled';

export const Contact = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const ContactItem = styled.div`
  width: 600px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;
export const ContactLi = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;
export const ButtonDelite = styled.button`
  width: 150px;
  min-height: 30px;
  font-weight: 600;
  font-size: 16px;
  color: #f8fafb;
  background-color: #7d7d3f;
  border-width: 1px;
  border-radius: 4px;
  border-style: inset;
  border-color: #7d7d3f;
  &:hover {
    cursor: pointer;
    background-color: #213804;
    border-color: #213804;
  }
`;
