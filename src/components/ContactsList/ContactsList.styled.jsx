import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const LabelItem = styled.span`
  display: flex;
  margin-left: 10px;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  &:hover {
    color: blue;
  }
`;
export { ContactsList, LabelItem };
