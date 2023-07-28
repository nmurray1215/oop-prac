//factory function
function createCirlce(radius){
return {
    radius,
    draw: function(){
        console.log("draw");
    }
};
};

let circle = createCirlce(1);

//constructor
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(draw);
    }
}

let another = new Circle(1);
