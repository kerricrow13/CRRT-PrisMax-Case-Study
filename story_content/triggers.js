function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mNeGfR2tuk":
        Script1();
        break;
      case "6dnHuOkuOu3":
        Script2();
        break;
      case "6A5G7c2rHpB":
        Script3();
        break;
      case "5gWzNNQ0yE4":
        Script4();
        break;
      case "6BuSElKH6aE":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6a9eojpzoSk');
const duration = 750;
const easing = 'ease-out';
const id = '6AiWOdbiryv';
const pulseAmount = 0.07;
const delay = 5000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6FiAFAdHR0m');
const duration = 750;
const easing = 'ease-out';
const id = '6oXUcie7i4o';
const pulseAmount = 0.07;
const delay = 15000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6WwsfM2FGZI');
const duration = 750;
const easing = 'ease-out';
const id = '6k5UCmUajjP';
const pulseAmount = 0.07;
const delay = 5000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6WwsfM2FGZI');
const duration = 750;
const easing = 'ease-out';
const id = '6k5UCmUajjP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6nbkKk1xmhf');
const duration = 750;
const easing = 'ease-out';
const id = '5l4hhoymkFG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
