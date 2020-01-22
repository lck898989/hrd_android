const {ccclass, property} = cc._decorator;

@ccclass
export default class Index extends cc.Component {
    @property(cc.Node)
    bg: cc.Node = null;
    start () {
        // init logic
        this.adaptBg();
    }
    // 适配背景图片
    private adaptBg(): void {
        if(this.bg) {
            // let maxScale = Math.max(cc.view.getCanvasSize().width / this.bg.width,cc.view.getCanvasSize().height / this.bg.height);
            // this.bg.scale = maxScale;
            // // let maxScale = Math.
            // let minScale = Math.max(cc.view.getCanvasSize().width / this.bg.width,cc.view.getCanvasSize().height / this.bg.height);
            // this.bg.scale = minScale;
            let srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.bg.width, cc.view.getCanvasSize().height / this.bg.height);
            let realWidth = this.bg.width * srcScaleForShowAll;
            let realHeight = this.bg.height * srcScaleForShowAll;
            // this.bg.scale = srcScaleForShowAll;
            // 2. 基于第一步的数据，再做缩放适配
            this.bg.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
        }
    }
    // 按钮事件
    private btnEvent(e: cc.Event,data: any): void {
        if(data) {
            switch(data) {
                case "start":
                    break;
                case "set":
                    break;    
            }
        }
    }
}
