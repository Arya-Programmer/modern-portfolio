// Theme color variables

export const lightTheme = {
    // Background colors
    background: '#ffffff',
    backgroundAlt: '#f9f9f9',
    backgroundElevated: '#f0f0f0',

    // Text colors
    text: '#333333',
    textMuted: '#666666',
    textDimmed: '#555555',

    // UI element colors
    primary: '#0070f3',
    primaryHover: '#0060df',
    border: '#e0e0e0',
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowHover: 'rgba(0, 0, 0, 0.15)',

    // Component specific
    card: '#ffffff',
    chip: '#f0f0f0',
    tag: '#f0f0f0',
    tagText: '#555555',
    timeline: '#e0e0e0',
    icon: '#0070f3',
    formBackground: '#f9f9f9',
    formBorder: '#e0e0e0',
}

export const darkTheme = {
    // Background colors
    background: '#121212',
    backgroundAlt: '#1a1a1a',
    backgroundElevated: '#2a2a2a',

    // Text colors
    text: '#f5f5f5',
    textMuted: '#bbbbbb',
    textDimmed: '#cccccc',

    // UI element colors
    primary: '#3291ff',
    primaryHover: '#2280e8',
    border: '#444444',
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowHover: 'rgba(0, 0, 0, 0.4)',

    // Component specific
    card: '#222222',
    chip: '#2a2a2a',
    tag: '#333333',
    tagText: '#dddddd',
    timeline: '#444444',
    icon: '#3291ff',
    formBackground: '#222222',
    formBorder: '#444444',
}

export type ThemeColors = typeof lightTheme;
