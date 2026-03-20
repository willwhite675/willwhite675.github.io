var myClass = (function () {
    function myClass() {
        var _this = this;
        this.myButton = document.getElementById('myButton');
        this.myArea = document.getElementById('myArea');
        this.fireEscape = document.getElementById('fireEscape');
        this.mainContent = document.getElementById('content');
        this.garageDoor = document.getElementById("garageDoorContainer");
        this.noises = document.getElementById("noises");
        this.returnToFire = document.getElementById("returnFire");
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.success = function (location) {
            var crd = location.coords;
            _this.myArea.textContent = "Latitude: ".concat(crd.latitude, " Longitude: ").concat(crd.longitude, " Accuracy: ").concat(location.coords.accuracy);
            console.log(crd);
            console.log(location);
        };
        this.error = function (error) {
            console.warn("ERROR(".concat(error.code, "): ").concat(error.message));
        };
        this.myButton.addEventListener('click', handleButtonClick);
        this.fireEscape.addEventListener('click', function () {
            _this.mainContent.style.animationName = 'fadeOut';
            _this.mainContent.style.animationDuration = '2s';
            _this.mainContent.style.animationFillMode = 'forwards';
            setTimeout(function () {
                _this.mainContent.style.display = 'none';
                _this.garageDoor.style.display = 'block';
                _this.garageDoor.style.animationName = 'appear';
                _this.garageDoor.style.animationDuration = '10s';
                _this.garageDoor.style.animationFillMode = 'forwards';
            }, 2000);
            setTimeout(function () {
                _this.noises.textContent = '';
            }, 12000);
        });
        this.returnToFire.addEventListener('click', function () {
            _this.noises.textContent = '*Garage door noises*';
            _this.garageDoor.style.animationName = 'disappear';
            _this.garageDoor.style.animationDuration = '10s';
            _this.garageDoor.style.animationFillMode = 'forwards';
            setTimeout(function () {
                _this.garageDoor.style.display = 'none';
                _this.mainContent.style.display = 'flex';
                _this.mainContent.style.animationName = 'fadeIn';
                _this.mainContent.style.animationDuration = '2s';
                _this.mainContent.style.animationFillMode = 'forwards';
            }, 10000);
        });
    }
    myClass.prototype.changeButton = function () {
        if (this.myArea) {
            navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        }
    };
    return myClass;
}());
var MyClass = new myClass();
function handleButtonClick() {
    MyClass.changeButton();
}
