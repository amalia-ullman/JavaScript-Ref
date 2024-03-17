window.matchMedia('prefers-color-scheme: dark').addEventListener('change', () => {
    let darkMode = window.matchMedia('prefers-color-scheme: dark').matches;
    console.log(`Dark Mode:  ${darkMode}` );
})