import { gsap } from "gsap";
class changeContent {
  constructor() {

    this.currentDataIndex = -1
  }


  getData(e, data) {

    document.querySelector('#info').style.display = "none";
    this.currentDataIndex = e.currentTarget.dataset.index;

    let mHeadline = document.querySelector("#headline");
    mHeadline.textContent = data.name;

    const imageSrc = data.img;
    const img = "../assets/" + imageSrc;

    let mImg = document.querySelector('#showImg');
    mImg.src = img;


    let mContent = document.querySelector("#content");
    mContent.textContent = data.text;

    let elem = document.querySelector("#cardContainer");

    gsap.to(elem, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
    });
  }

  get currentIndex() {
    return this.currentDataIndex;
  }

}

export default changeContent;