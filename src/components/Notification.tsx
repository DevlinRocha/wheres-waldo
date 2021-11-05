import { Banner } from './styles/Banner.styled';

import { NotificationState } from './WaldoGame';

interface NotificationProps {
    notificationData: NotificationState;
};

export default function Notification(props: NotificationProps) {
    return (
        <Banner notificationData={props.notificationData} >
            {props.notificationData.isCharacterFound
                ? <span>You found <b>{props.notificationData.character}</b>!</span>
                : <span><b>{props.notificationData.character}</b> not found, try again!</span>
            }
        </Banner>
    );
};