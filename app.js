const imgBase = document.getElementById("base");
const imgBoobs = document.getElementById("boobs");
const imgTop = document.getElementById("top");
const imgBottom = document.getElementById("bottom");
const imgJacket = document.getElementById("jacket");
const imgEffect = document.getElementById("effect");
const imgFace = document.getElementById("face");

const bag = document.getElementById("bag");
const inventory = document.getElementById("inventory");

const ROOT = "./assets";

imgBase.src =
  ROOT +
  "/base.png";

imgBoobs.src =
  ROOT +
  "/outfits/first_wave/boobs.png";

imgTop.src =
  ROOT +
  "/outfits/first_wave/normal_top.png";

imgBottom.src =
  ROOT +
  "/outfits/first_wave/normal_bottom.png";

imgJacket.src =
  ROOT +
  "/outfits/first_wave/normal_jacket.png";

imgFace.src =
  ROOT +
  "/expressions/expression_1.png";

imgEffect.src = "";

bag.onclick = () => {
  
  if (
    
    inventory.style.display === "block"
    
  ) {
    
    inventory.style.display = "none";
    
  } else {
    
    inventory.style.display = "block";
    
  }
  
};

window.showTop = () => {
  
  imgTop.style.display = "block";
  
};

window.hideTop = () => {
  
  imgTop.style.display = "none";
  
};

window.showBottom = () => {
  
  imgBottom.style.display = "block";
  
};

window.hideBottom = () => {
  
  imgBottom.style.display = "none";
  
};

window.showJacket = () => {
  
  imgJacket.style.display = "block";
  
};

window.hideJacket = () => {
  
  imgJacket.style.display = "none";
  
};

window.setFace = (id) => {
  
  imgFace.src =
    
    ROOT +
    
    "/expressions/expression_" + id + ".png";
  
};

window.blush1 = () => {
  
  imgEffect.src =
    
    ROOT +
    
    "/body_effects/blush 1.png";
  
};

window.blush2 = () => {
  
  imgEffect.src =
    
    ROOT +
    
    "/body_effects/blush 2.png";
  
};

window.sweat = () => {
  
  imgEffect.src =
    
    ROOT +
    
    "/body_effects/sweat.png";
  
};

window.slime = () => {
  
  imgEffect.src =
    
    ROOT +
    
    "/body_effects/slime on face layer.png";
  
};

window.clearEffect = () => {
  
  imgEffect.src = "";
  
};

console.log("READY");