/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
*/

function createEmployeeRecord(arrayEle) {
    return {
        firstName: arrayEle[0],
        familyName: arrayEle[1],
        title: arrayEle[2],
        payPerHour: arrayEle[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ")

    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(inEvent)

    return this
}



const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ")

    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(outEvent)

    return this
}

const hoursWorkedOnDate = function (targetDate) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const outEvents = this.timeOutEvents.find(oEvent => oEvent.date === targetDate)
    return (outEvents.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(targetDate) {
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce( (memo, d) => {
        return memo + wagesEarnedOnDate.call(this, d)
    }, 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName)
}

function calculatePayroll(recsArray){
     return recsArray.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
     }, 0)
}