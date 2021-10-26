import { Firestore, doc, getDoc } from 'firebase/firestore';

interface MenuProps {
    db: Firestore,
    isContextMenuOpen: boolean,
    setIsContextMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    mouseCoords: {
        x: number;
        y: number;
    },
};

export default function ContextMenu(props: MenuProps) {

    async function getCoords(selection: string) {
        const docID = selection.toLowerCase();

        const docRef = doc(props.db, 'coords', docID);
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
            } else {
              console.log(`${selection} not found, try again!`);
            };
        };
    };

    return (
        <ul>
            <li onClick={handleClick} >Waldo</li>
            <li onClick={handleClick} >Wizard</li>
        </ul>
    );
};