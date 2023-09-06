import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: 112px;
  gap: 14px;

  background-color: var(--outlet-background-color);
  border-radius: 8px;
  border: 1px solid var(--auth-background-color);

  padding: 14px 14px 18px;
  margin-right: 10px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: var(--title-text-main-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-bottom: 32px;
`;

export const Board = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1.8px solid var(--accent-background-color);
  border-radius: 32px;
  overflow: hidden;
`;
export const Letter = styled.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 21px;
  line-height: 1.28;
`;

const getPriorityColor = priority => {
  switch (priority) {
    case 'high':
      return '#EA3D65';
    case 'medium':
      return '#F3B249';
    case 'low':
      return '#72C2F8';
    default:
      return 'gray';
  }
};

export const PriorityBtn = styled.button`
  cursor: pointer;
  height: 20px;
  border: none;

  font-size: 10px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 8px;
  border-radius: 4px;
  color: var(--text-priority-other-color);
  background-color: ${({ priority }) =>
    getPriorityColor(priority.trim().toLowerCase())};
  text-transform: lowercase;
  line-height: calc(12 / 10);
  font-weight: 600;
  ::first-letter {
    text-transform: capitalize;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
