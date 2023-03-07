const firstNames = ['Barka', 'Treath', 'Fring', 'Bela', 'Crach', 'Darwn', 'Gawb', 'Thrain', 'Gloin', 'Fasem', 'Beara', 'Coraw', 'Breda', 'Lego', 'Tre', 'Vinir', 'Chrono', 'harfa', 'Brini', 'Zene']
const lastNames = ['thir', 'bara', 'graw', 'binir', 'dreathe', 'nawk', 'pown', 'minas', 'moria', 'frun', 'morgo', 'aswan', 'thir', 'rena', 'thor', 'tos', 'war', 'las', 'greath', 'born', 'krek', 'bar', 'grun']

const randomNumber = (max) => Math.floor(Math.random() * max);

const getNames = () => `${firstNames[randomNumber(firstNames.length)]} ${lastNames[randomNumber(lastNames.length)]}`

const setNames = () => {
    document.getElementById('generated-name').textContent = getNames();
}

document.getElementById('name-button').addEventListener('click', setNames);