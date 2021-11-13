import styled from 'styled-components';

import { NotificationState } from '../WaldoGame';

interface BannerProps {
  notificationData: NotificationState;
}

export const Banner = styled.aside<BannerProps>`
  position: fixed;
  color: white;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: ${props =>
    props.notificationData.isCharacterFound
      ? props => props.theme.colors.primary
      : props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.sizing.ul.borderRadius};
  z-index: 1;
`;
