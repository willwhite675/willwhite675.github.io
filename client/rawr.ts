class MyClass {

    myButton = document.getElementById('myButton') as HTMLButtonElement
    myArea = document.getElementById('myArea') as HTMLTextAreaElement
    fireEscape = document.getElementById('fireEscape') as HTMLAnchorElement
    mainContent = document.getElementById('content') as HTMLAreaElement
    garageDoor = document.getElementById("garageDoorContainer") as HTMLDivElement
    noises = document.getElementById("noises") as HTMLTextAreaElement
    returnToFire = document.getElementById("returnFire") as HTMLAnchorElement
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    constructor() {
        this.myButton.addEventListener('click', handleButtonClick)
        this.fireEscape.addEventListener('click', () => {
            this.mainContent.style.animationName = 'fadeOut'
            this.mainContent.style.animationDuration = '2s'
            this.mainContent.style.animationFillMode = 'forwards'
            setTimeout(() => {
                this.mainContent.style.display = 'none'
                this.garageDoor.style.display = 'block'
                this.garageDoor.style.animationName = 'appear'
                this.garageDoor.style.animationDuration = '10s'
                this.garageDoor.style.animationFillMode = 'forwards'
            }, 2000)
            setTimeout(() => {
            this.noises.textContent = ''
            },12000)
        })
        this.returnToFire.addEventListener('click', () => {
            this.noises.textContent = '*Garage door noises*'
            this.garageDoor.style.animationName = 'disappear'
            this.garageDoor.style.animationDuration = '10s'
            this.garageDoor.style.animationFillMode = 'forwards'
            setTimeout(() => {
                this.garageDoor.style.display = 'none'
                this.mainContent.style.display = 'flex'
                this.mainContent.style.animationName = 'fadeIn'
                this.mainContent.style.animationDuration = '2s'
                this.mainContent.style.animationFillMode = 'forwards'
            }, 10000)
        })
    }

    success = (location: any) => {
        const crd = location.coords
        this.myArea.textContent = `Latitude: ${crd.latitude} Longitude: ${crd.longitude} Accuracy: ${location.coords.accuracy}`
        console.log(crd)
        console.log(location)

    }
    error = (error: any) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);

    }
    changeButton () {
        if (this.myArea) {
            navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        }
    }


}
const myClass = new MyClass()
function handleButtonClick() {
    myClass.changeButton()
}
