export const Theme = {
    contextMenu: {
        selectionMenu: {
            background: 'black',
            text: 'pink',
            hover: {
                text: 'coral',
                background: 'white',
            },
        },
        targetingBox: {
            borderColor: '#39ff14', // Neon green
        },
    },
    body: '#fff',
};

export type ThemeType = typeof Theme;