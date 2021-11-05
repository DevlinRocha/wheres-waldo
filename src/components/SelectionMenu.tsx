import { doc, getDoc } from 'firebase/firestore';
import { Coords, NotificationState } from './WaldoGame';
import { db } from '../index';
import React from 'react';


interface MenuProps {
    isContextMenuOpen: boolean, setIsContextMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    notificationData: NotificationState, setNotificationData: React.Dispatch<React.SetStateAction<NotificationState>>;
    img: string, level: string, characters: string[], mouseCoords: Coords;
    isOdlawFound?: boolean, setIsOdlawFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWaldoFound?: boolean, setIsWaldoFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWendaFound?: boolean, setIsWendaFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWizardFound?: boolean, setIsWizardFound: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SelectionMenu(props: MenuProps) {

    function notificationTimer() {
        setTimeout(() => {
            props.setNotificationData({...props.notificationData,
                isNotificationOpen: false,
            });
        }, 3000);
    };

    async function getCoords(selection: string) {
        const docRef = doc(db, "Levels", props.level, "Coordinates", selection);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          const waldoCoords = docSnap.data();
          return waldoCoords;

        } else {

          console.error('No such document!');

        };
    };

    async function handleClick(e: any) {
        const selection: string = e.target.textContent;
        props.setIsContextMenuOpen(!props.isContextMenuOpen);

        const waldoCoords = await getCoords(selection);

        if (waldoCoords) {

            // Test if the selection is within the area
            if ((Math.abs(props.mouseCoords.x - waldoCoords.x) < 25) && (Math.abs(props.mouseCoords.y - waldoCoords.y) < 42)) {

                props.setNotificationData({
                    isNotificationOpen: true,
                    character: selection,
                    isCharacterFound: true,
                });

                notificationTimer();

                switch (selection) {

                    case 'Odlaw':
                        props.setIsOdlawFound(true);
                        break;
                        
                    case 'Waldo':
                        props.setIsWaldoFound(true);
                        break;

                    case 'Wenda':
                        props.setIsWendaFound(true);
                        break;

                    case 'Wizard':
                        props.setIsWizardFound(true);
                        break;
                };

            } else {

                props.setNotificationData({
                    isNotificationOpen: true,
                    character: selection,
                    isCharacterFound: false,
                });
        
                notificationTimer();

            };
        };
    };

    function isFound(character: string): boolean {
        
        switch (character) {

            case 'Odlaw':
                return props.isOdlawFound ? true : false;

            case 'Waldo':
                return props.isWaldoFound ? true : false;

            case 'Wenda':
                return props.isWendaFound ? true : false;

            case 'Wizard':
                return props.isWizardFound ? true : false;

            default:
                return false;
        };
    };

    return (
        <ul>
            {props.characters.map(character=>{
                return (
                    <li onClick={handleClick} key={character} >{isFound(character) ? <s>{character}</s> : character}</li>
                );
            })}
        </ul>
    );
};