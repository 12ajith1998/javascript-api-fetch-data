const getRandomuserData = () => {
    fetch(`https://randomuser.me/api/?results=10`)
        .then(data => data.json())
        .then(data => generateCards(data));
};

const generateCards = (data) => {
    data.results.map(data => {
    // const result = data.results[0];

    const userCard = `
        <div class="card">
            <div class="left-side">
                <img src="${data.picture.medium}" alt="${data.name.first} ${data.name.last} "/>
            </div>
            <div class="right-side">
                <h2>${data.name.first}, ${data.name.last}</h2>
                <a href="Mailto:${data.email}"> ${data.email}</a><br><br>
                <a href="tel:${data.phone}"> ${data.phone}</a><br>
            </div>
        </div>
    `;
    document.body.innerHTML += userCard;
});
}
getRandomuserData();    