import HikeModel from "./hikeModel.js";
import HikeView from "./hikeView.js";

class HikesOperate {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new HikeModel();
        this.hikeView = new HikeView();
    }
    showHikeList() {
        const hikeList = this.hikeModel.getAllHikes();
        this.hikeView.renderHikeList(this.parentElement, hikeList);
        this.addHikeListener();
    }
    showOneHike() {
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikeView.renderOneHikeFull(this.parentElement, hike).onclick = () => {
            this.showHikeList();
        };
    }
    addHikeListener() {
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                this.showOneHike(e.currentTarget.dataset.name);
            });
        });
    }
}


export default HikesOperate;