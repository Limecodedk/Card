class ShowActor {

  constructor() {
    const dataObj = [
      {
        name: "Death smokie",
        img: "death-smokie.png",
        information: { strengt: 100, lives: 10 },
        text: "Ninja Killer dont touch him"
      },
      {
        name: "Black Scum",
        img: "black-alien-scum.png",
        information: { strengt: 90, lives: 5 },
        text: "Black Scum is a Ninja killer"
      },
      {
        name: "Ping Pang",
        img: "angry-ping.png",
        information: { strengt: 80, lives: 4 },
        text: "Ninja Killer dont touch him"
      }
    ]

    console.log(dataObj[2].name);


    const menuContainer = document.createElement('nav');
    menuContainer.id = "menuContainer"
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement('ul')
    menuItemContainer.id = "menuItemContainer";
    menuContainer.appendChild(menuItemContainer);

    dataObj.forEach((el, index) => {

      const menuItem = document.createElement('li');
      menuItem.setAttribute("data-index", `${index}`);
      menuItem.className = "menuitem";
      menuItem.textContent = el.name;
      menuItemContainer.appendChild(menuItem);

    })


    const cardContainer = document.createElement('section');
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

    const childCardArray = ["headline", "imagecon", "content", "info"];
    childCardArray.forEach((elementId, index) => {
      const cardChild = document.createElement('div');
      cardChild.id = elementId;
      card.appendChild(cardChild);
    });

    const showImg = document.createElement("img");
    showImg.id = "ShowImg";
    showImg.src = "../assets/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);


    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);

  }//END constructor

}

export default ShowActor;