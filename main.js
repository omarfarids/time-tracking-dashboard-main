// time tracking js file 

// sections where data appeares 
let workCurrent = document.querySelector(".work-hours")
let workPrevious = document.querySelector(".work-previous")

let playCurrent = document.querySelector(".play-hours")
let playPrevious = document.querySelector(".play-previous")

let studyCurrent = document.querySelector(".study-hours")
let studyPrevious = document.querySelector(".study-previous")

let exerciseCurrent = document.querySelector(".exercise-hours")
let exercisePrevious = document.querySelector(".exercise-previous")

let socialCurrent = document.querySelector(".social-hours")
let socialPrevious = document.querySelector(".social-previous")

let selfCareCurrent = document.querySelector(".selfcare-hours")
let selfCarePrevious = document.querySelector(".selfcare-previous")

// current and previous hours for all sections 
let timeData = {
    daily:{
        work:{
            current : 5,
            previous : 7,
            insertData(){
                workCurrent.innerHTML = this.current + "<span>hrs</span>"
                workPrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        play:{
            current : 1,
            previous : 2,
            insertData(){
                playCurrent.innerHTML = this.current + "<span>hrs</span>"
                playPrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        study:{
            current : 0,
            previous : 1,
            insertData(){
                studyCurrent.innerHTML = this.current + "<span>hrs</span>"
                studyPrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        exercise:{
            current : 1,
            previous : 1,insertData(){
                exerciseCurrent.innerHTML = this.current + "<span>hrs</span>"
                exercisePrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        social:{
            current : 1,
            previous : 3,
            insertData(){
                socialCurrent.innerHTML = this.current + "<span>hrs</span>"
                socialPrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        selfCare:{
            current : 0,
            previous : 2,
            insertData(){
                selfCareCurrent.innerHTML = this.current + "<span>hrs</span>"
                selfCarePrevious.innerHTML = `Last Day - ${this.previous}hrs`
            }
        },
        dailyData(){
            timeData.daily.work.insertData()
            timeData.daily.play.insertData()
            timeData.daily.study.insertData()
            timeData.daily.exercise.insertData()
            timeData.daily.social.insertData()
            timeData.daily.selfCare.insertData()
        }

    },
    weekly:{
        work:{
            current : 32,
            previous : 36,
            insertData(){
                workCurrent.innerHTML = this.current + "<span>hrs</span>"
                workPrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        play:{
            current : 10,
            previous : 8,
            insertData(){
                playCurrent.innerHTML = this.current + "<span>hrs</span>"
                playPrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        study:{
            current : 4,
            previous : 7,
            insertData(){
                studyCurrent.innerHTML = this.current + "<span>hrs</span>"
                studyPrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        exercise:{
            current : 4,
            previous : 5,
            insertData(){
                exerciseCurrent.innerHTML = this.current + "<span>hrs</span>"
                exercisePrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        social:{
            current : 5,
            previous : 10,
            insertData(){
                socialCurrent.innerHTML = this.current + "<span>hrs</span>"
                socialPrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        selfCare:{
            current : 2,
            previous : 2,
            insertData(){
                selfCareCurrent.innerHTML = this.current + "<span>hrs</span>"
                selfCarePrevious.innerHTML = `Last Week - ${this.previous}hrs`
            }
        },
        weeklyData(){
            timeData.weekly.work.insertData()
            timeData.weekly.play.insertData()
            timeData.weekly.study.insertData()
            timeData.weekly.exercise.insertData()
            timeData.weekly.social.insertData()
            timeData.weekly.selfCare.insertData()
        }
    },
    monthly:{
        work:{
            current : 103,
            previous : 128,
            insertData(){
                workCurrent.innerHTML = this.current + "<span>hrs</span>"
                workPrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        play:{
            current : 23,
            previous : 29,
            insertData(){
                playCurrent.innerHTML = this.current + "<span>hrs</span>"
                playPrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        study:{
            current : 13,
            previous : 19,
            insertData(){
                studyCurrent.innerHTML = this.current + "<span>hrs</span>"
                studyPrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        exercise:{
            current : 11,
            previous : 18,
            insertData(){
                exerciseCurrent.innerHTML = this.current + "<span>hrs</span>"
                exercisePrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        social:{
            current : 21,
            previous : 23,
            insertData(){
                socialCurrent.innerHTML = this.current + "<span>hrs</span>"
                socialPrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        selfCare:{
            current : 7,
            previous : 11,
            insertData(){
                selfCareCurrent.innerHTML = this.current + "<span>hrs</span>"
                selfCarePrevious.innerHTML = `Last Month - ${this.previous}hrs`
            }
        },
        monthlyData(){
            timeData.monthly.work.insertData()
            timeData.monthly.play.insertData()
            timeData.monthly.study.insertData()
            timeData.monthly.exercise.insertData()
            timeData.monthly.social.insertData()
            timeData.monthly.selfCare.insertData()
        }
    },
}

// the three selections [daily/weekly/monthly] 
let selection = document.querySelectorAll(".jeremy-main .jeremy-footer p");

// action of removing "active" class from all selections 
// and putting it for the one clicked
selection.forEach(clicked => clicked.addEventListener("click",()=>{
    selection.forEach(e=>e.classList.remove("active"))
    clicked.classList.toggle("active");
}))

// Event Listener for puting data in its order on click 
selection[0].addEventListener("click",timeData.daily.dailyData)
selection[1].addEventListener("click",timeData.weekly.weeklyData)
selection[2].addEventListener("click",timeData.monthly.monthlyData)