console.clear();

console.log("START");

const app=new PIXI.Application({
resizeTo:window,
backgroundColor:0x000000,
antialias:true
});

document.body.appendChild(app.view);

let model;

async function load(){

try{

console.log("Loading Model...");

model=await PIXI.live2d.Live2DModel.from(
"./runtime/izumi_illust.model3.json"
);

window.model=model;

console.log("MODEL LOADED");

console.log(model);

model.anchor.set(.5,.5);

model.scale.set(.25);

model.x=window.innerWidth/2;

model.y=window.innerHeight*.72;

app.stage.addChild(model);

console.log("===== EXPRESSIONS =====");

console.table(
model.internalModel.settings.expressions
);

console.log("===== MOTIONS =====");

console.table(
model.internalModel.settings.motions
);

console.log("===== PARAMS =====");

console.log(
model.internalModel.coreModel._parameterIds
);

console.log("===== PARTS =====");

console.log(
model.internalModel.coreModel._partIds
);

console.log("READY");

}catch(e){

console.error(e);

}

}

load();

window.smile=()=>{

console.log("▶ Smile");

model.expression("Smile");

}

window.sad=()=>{

console.log("▶ Sad");

model.expression("Sad");

}

window.angry=()=>{

console.log("▶ Angry");

model.expression("Angry");

}

window.surprised=()=>{

console.log("▶ Surprised");

model.expression("Surprised");

}

window.blush=()=>{

console.log("▶ Blushing");

model.expression("Blushing");

}

window.normal=()=>{

console.log("▶ Normal");

model.expression("Normal");

}

window.f01=()=>{

console.log("▶ f01");

model.expression("f01");

}

window.idle=()=>{

console.log("▶ Idle");

try{

model.motion("Idle");

console.log("✓ Idle Started");

}catch(e){

console.error(e);

}

}

window.tap=()=>{

console.log("▶ Tap");

try{

model.motion("Tap");

console.log("✓ Tap Started");

}catch(e){

console.error(e);

}

}

window.left=()=>{

console.log("▶ FlickLeft");

try{

model.motion("FlickLeft");

console.log("✓ FlickLeft Started");

}catch(e){

console.error(e);

}

}

window.right=()=>{

console.log("▶ FlickRight");

try{

model.motion("FlickRight");

console.log("✓ FlickRight Started");

}catch(e){

console.error(e);

}

}

window.shake=()=>{

console.log("▶ Shake");

try{

model.motion("Shake");

console.log("✓ Shake Started");

}catch(e){

console.error(e);

}

}

window.playIndex=(group,index)=>{

console.log(

"▶",

group,

index

);

try{

model.motion(

group,

index

);

console.log(

"✓",

group,

index

);

}catch(e){

console.error(e);

}

}

window.eyeClose=()=>{

console.log("Eyes Close");

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_L_OPEN",

0

);

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_R_OPEN",

0

);

}

window.eyeOpen=()=>{

console.log("Eyes Open");

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_L_OPEN",

1

);

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_R_OPEN",

1

);

}

window.hideClothes=()=>{

console.log("Hide Clothes");

model.internalModel

.coreModel

.setPartOpacityById(

"PARTS_01_CLOTHES",

0

);

}

window.showClothes=()=>{

console.log("Show Clothes");

model.internalModel

.coreModel

.setPartOpacityById(

"PARTS_01_CLOTHES",

1

);

}

window.zoomIn=()=>{

console.log("Zoom In");

model.scale.x+=0.05;

model.scale.y+=0.05;

}

window.zoomOut=()=>{

console.log("Zoom Out");

model.scale.x-=0.05;

model.scale.y-=0.05;

}

window.moveLeft=()=>{

model.x-=20;

}

window.moveRight=()=>{

model.x+=20;

}

window.moveUp=()=>{

model.y-=20;

}

window.moveDown=()=>{

model.y+=20;

}

window.addEventListener(

"touchmove",

e=>{

if(!model)return;

const t=e.touches[0];

let x=(t.clientX/window.innerWidth-.5)*30;

let y=(t.clientY/window.innerHeight-.5)*30;

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_ANGLE_X",

x

);

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_ANGLE_Y",

-y

);

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_BALL_X",

x/30

);

model.internalModel

.coreModel

.setParameterValueById(

"PARAM_EYE_BALL_Y",

-y/30

);

}

);

console.log("TEST:");

console.log("smile()");
console.log("sad()");
console.log("angry()");
console.log("surprised()");
console.log("blush()");
console.log("f01()");
console.log("idle()");
console.log("tap()");
console.log("left()");
console.log("right()");
console.log("shake()");
console.log('playIndex("Idle",0)');
console.log('playIndex("Idle",1)');
console.log('playIndex("Tap",0)');
console.log('playIndex("Tap",1)');

// work