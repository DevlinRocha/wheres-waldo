import { useEffect } from "react"

interface TimerProps {
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
    isGameOver: boolean;
    isTimerOn: boolean, setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer(props: TimerProps) {

    useEffect(() => {
        if (props.isGameOver === false) {
            props.setIsTimerOn(true);
        } else {
            props.setIsTimerOn(false);
        }
    }, [props.isGameOver]);

    useEffect(() => {

        let interval: NodeJS.Timeout;

        if (props.isTimerOn) {

            interval = setInterval(() => {

                props.setTime(prevTime => prevTime + 10);

            }, 10);

        };

        return () => {
            clearInterval(interval);
        };

    }, [props.isTimerOn]);

    return (
        <time>
            <span>{(Math.floor((props.time/60000)%60)).toString().slice(-2)}:</span>
            <span>{("0"+Math.floor((props.time/1000)%60)).slice(-2)}</span>
        </time>
    );
};