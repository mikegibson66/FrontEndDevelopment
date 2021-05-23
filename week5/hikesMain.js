import hikesOperate from "./hikesOperate.js";
const myHikesOp = new hikesOperate('hikes');
window.addEventListener('load', () => {
   myHikesOp.showHikeList();
});