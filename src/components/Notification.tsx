import { Banner } from './styles/Banner.styled';

import { NotificationState } from './WaldoGame';

interface NotificationProps {
    notificationData: NotificationState;
};

export default function Notification(props: NotificationProps) {
    return (
        <Banner>
            {props.notificationData.isCharacterFound
                ? <span>You found {props.notificationData.character}!</span>
                : <span>{props.notificationData.character} not found, try again!</span>
            }
        </Banner>
    );
};