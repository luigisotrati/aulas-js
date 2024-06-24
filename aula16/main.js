const cardsData = [
    { title: "Ração de gatachorro", description: "Comida para quimera" },
    { title: "João", description: "Descrição do Card 2" },
    { title: "Dudu", description: "Descrição do Card 3" },
    { title: "Card 4", description: "Descrição do Card 4"},
    { title: "Card 5", description: "Descrição do Card 5"},
    { title: "Card 6", description: "Descrição do Card 6"}
];

function createCards(data) {
    const container = document.getElementById('cards-container');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        container.appendChild(card);
    });
}

createCards(cardsData);