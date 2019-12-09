var Gyrocopter = (function () {
    function Gyrocopter(level) {
        Unit.call(this, 1488, 1337, level);
    }

    Gyrocopter.prototype = Object.create(Unit.prototype);
    Gyrocopter.prototype.constructor = Gyrocopter;

CrocoTurtle.prototype.step = function()
{
    console.log('Step');
}

    return Gyrocopter;
}());