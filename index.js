//factory function
function createCirlce(radius){
return {
    radius,
    draw: function(){
        console.log("draw");
    }
};
};

circle.draw();