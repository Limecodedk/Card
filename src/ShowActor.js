import { gsap } from "gsap";
import changeContent from "./changeContent";

class ShowActor {

  constructor() {

    const CC = new changeContent();

    this.currentDataIndex

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
      menuItem.addEventListener("click", (e) => CC.getData(e, el));

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
    showImg.id = "showImg";
    showImg.src = "../assets/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    const infochild = document.createElement("div");
    infochild.id = "infochild";
    document.querySelector("#info").appendChild(infochild);

    const strength = document.createElement("div");
    strength.id = "strength";
    document.querySelector("#infochild").appendChild(strength);
    const lives = document.createElement("div");
    lives.id = "lives";
    document.querySelector("#infochild").appendChild(lives);

    /* START Card Event */

    card.addEventListener("click", (e) => {

      if (CC.currentIndex > -1) {

        document.querySelector('#info').style.display = "block";

        gsap.to("#info", {
          duration: 0.05,
          rotate: 10,
          scale: 1.3,
          repeat: 3,
          transformOrigin: "center",
          yoyo: true,
        });

        let addInfo = dataObj[CC.currentIndex].information;

        let mStrength = document.querySelector("#strength");
        mStrength.textContent = addInfo.strengt;

        let mLives = document.querySelector("#lives");
        mLives.textContent = addInfo.lives;

      }
    });

    /* END Card Event */

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);


  }//END constructor


}

export default ShowActor;