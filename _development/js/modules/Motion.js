// import velocity from 'velocity-animate';
import { animate } from "motion";
// import animate from 'motion';


export default class Motion {
  constructor() {
    const $boxes = Array.from(document.querySelectorAll(".box"));
    // animate($boxes, { backgroundColor: "red" })

    animate(
      $boxes,
      { rotate: 90 },
      {
        duration: 0.5,
        easing: "ease-in-out",
        repeat: 3,
        direction: "alternate"
      }
    )

    //stagger(蹌踉めく,スターガー)
    this.bind();
  }

  bind() {
  }


}




