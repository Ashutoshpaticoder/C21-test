class Ground{
    constructor(x,y,w,h){
        let options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
}