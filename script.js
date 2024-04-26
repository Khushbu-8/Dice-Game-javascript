
const diceContainer = document.querySelector('.dice-container');

const diceImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_z78uaWP_1qyQLXx-2K3ZC9uhRoyOs4exPgs9T7StQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqD6PlwHmA6rRzqvd4KwGUleBT2BgYgZPSql-LjZGRCyGR0y5iG_yK-mOtyTclvyXvyY&usqp=CAU',
    'https://static-00.iconduck.com/assets.00/dice-six-faces-three-icon-256x256-nygdibld.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXwMKSGhAJ9dQOazYfcLGZET76MjGl4S_iCLqRM4KBqA98jBKqGMWwVFYc5pXW3JRPYA&usqp=CAU',
    'https://static-00.iconduck.com/assets.00/dice-six-faces-five-icon-1024x1024-j0lprow4.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZ5qMxsjd383Y-6sTwd_spZ8RGYVr_bLV9Ht5kKFhDQ&s'
];

function rollDice() {
    diceContainer.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        const dice = document.createElement('div');
        dice.classList.add('dice');
        dice.style.backgroundImage = `url(${diceImages[Math.floor(Math.random() * diceImages.length)]})`;
        diceContainer.appendChild(dice);
    }
}