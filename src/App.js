import React from "react";
import FramerAnimation_1 from "./Motion/FramerAnimation_1";
import FramerAnimation_2 from "./Motion/FramerAnimation_2";
import Framer_Drag from "./Motion/Framer_Drag";
import Framer_Hover from "./Motion/Framer_Hover";
import Framer_Scroll from "./Motion/Framer_Scroll";
import Framer_ScrollTrigger from "./Motion/Framer_ScrollTrigger";
import Framer_pageTransition from "./Motion/Framer_pageTransition";

const App = () => {
  return (
    <div>
      <FramerAnimation_1 />
      <FramerAnimation_2 />
      <Framer_Drag />
      <Framer_Hover />
      <Framer_Scroll />
      <Framer_ScrollTrigger />
      <Framer_pageTransition/>
    </div>
  );
};

export default App;
