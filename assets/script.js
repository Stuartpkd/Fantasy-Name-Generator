const firstNames = ['Barka', 'Treath', 'Fring', 'Bela', 'Crach', 'Darwn', 'Gawb', 'Thrain', 'Gloin', 'Fasem', 'Beara', 'Coraw']
const lastNames = ['thir', 'bara', 'graw', 'binir', 'dreathe', 'nawk', 'pown', 'minas', 'moria', 'frun', 'morgo', 'aswan']

const randomNumber = (max) => Math.floor(Math.random() * max);

const getNames = () => `${firstNames[randomNumber(firstNames.length)]} ${lastNames[randomNumber(lastNames.length)]}`

const setNames = () => {
    document.getElementById('generated-name').textContent = getNames();
}

document.getElementById('name-button').addEventListener('click', setNames());