// 定义食物类Food
class Food{
    element:HTMLElement
    constructor(){
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!
    }
    // 定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    // 定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop
    }
    // 修改食物位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0， 最大是290
        // 蛇移动一次就是一格，一格大小就是10，所以要求食物的坐标必须是整10

        // Math.round(Math.random() * 290);//生成一个[0,290]的整数
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }
}

export default Food