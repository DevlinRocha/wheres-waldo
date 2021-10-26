import { doc, getDoc } from 'firebase/firestore';
import { Coords } from './WaldoGame';
import { db } from '../index';

interface MenuProps {
    isContextMenuOpen: boolean, setIsContextMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mouseCoords: Coords;
    isOdlawFound: boolean, setIsOdlawFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWaldoFound: boolean, setIsWaldoFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWendaFound: boolean, setIsWendaFound: React.Dispatch<React.SetStateAction<boolean>>;
    isWizardFound: boolean, setIsWizardFound: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContextMenu(props: MenuProps) {

    async function getCoords(selection: string) {
        const docID = selection.toLowerCase();

        const docRef = doc(db, 'coords', docID);
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
            if (JSON.stringify(waldoCoords) === JSON.stringify(props.mouseCoords)) {
                console.log(`You found ${selection}!`);
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
              console.log(`${selection} not found, try again!`);
            };
        };
    };

    return (
        <ul>
            <li onClick={handleClick} >{props.isOdlawFound ? <s>Odlaw</s> : 'Odlaw'}</li>
            <li onClick={handleClick} >{props.isWaldoFound ? <s>Waldo</s> : 'Waldo'}</li>
            <li onClick={handleClick} >{props.isWendaFound ? <s>Wenda</s> : 'Wenda'}</li>
            <li onClick={handleClick} >{props.isWizardFound ? <s>Wizard</s> : 'Wizard'}</li>
        </ul>
    );
};