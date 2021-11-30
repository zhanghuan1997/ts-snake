// 定义表示记分牌的类
class ScorePanel{
    // score和level用来记录分数和等级
    score:number = 0
    level:number = 1
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement
    levelEle:HTMLElement

    //设置一个变量限制等级
    maxLevel:number
    //设置一个变量表示多少分升级
    upScroe:number
    
    constructor(maxLevel:number = 10, upScroe:number = 10){
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        //最大的等级是10 满10分升一级
        this.maxLevel = maxLevel
        this.upScroe = upScroe
    }
     //增加分数的方法
     addScore(){
        // 使分数自增
        // this.score++;
        // this.scoreEle.innerHTML = this.score + '';
        this.scoreEle.innerHTML = ++this.score + "" 
        //满10分 升一级
        if(this.score % this.upScroe){
            this.levelUp()
        }
    }
    //升级方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level +''
        }
    }
}
export default ScorePanel