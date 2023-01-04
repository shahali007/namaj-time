class NamajTimes {
    constructor(namajTimesArr, districts, months, daySchedule, language) {
        this.namajTimesArr = namajTimesArr;
        this.districts = districts;
        this.months = months;
        this.daySchedule = daySchedule;
        this.language = language;

        this.buttonContainer = document.getElementById("buttonContainer");
        this.container = document.getElementById("dateContainer2");        
        this.districtSelect = document.getElementById("districtSelect");

        this.date = new Date();
        this.currentMonth = this.months[this.date.getMonth()].enName;
    }

    init() {
        this.generateMonthButton();
        this.generateDistrictSelect();
        this.container.setAttribute("data-month", this.currentMonth);
        this.loadInitialData();
        this.setActiveClass();
    }

    loadInitialData() {
        // filter current Month Data
        let getSingleData = this.namajTimesArr.filter((elem) => {
            return elem.monthName == this.currentMonth;
        });
        console.log(getSingleData);
        this.generateData(getSingleData);
    }

    generateData(getSingleData) {
        // remove old row
        this.container.innerHTML = "";
        // create table row
        if (getSingleData.length > 0) {
            getSingleData[0].data.map((monthData) => {
                let tr = document.createElement("tr");
                for (const [key, value] of Object.entries(monthData)) {
                    let td = document.createElement("td");
                    td.innerHTML = this.adjustTimeValue(key, value, monthData);
                    tr.appendChild(td);
                }
                this.container.appendChild(tr);
                this.setActiveClass();
            });
        } else {
            let p = document.createElement("p");
            p.innerHTML = "No data found";
            this.container.appendChild(p);
        }
    }

    adjustTimeValue(key, value, monthData) {
        const date = new Date(monthData.Date + " " + value);
        if (key == "Date") {
            let newDate = new Date();
            let mm = value.split("-")[1];
            let dd = value.split("-")[2];
            let yyyy = newDate.getFullYear();
            return this.convertIntoBanglaDate(yyyy, mm, dd);
            // const finalDate = new Intl.DateTimeFormat('bn-BN-u-ca-bangla', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date);
            // return finalDate;
        }
        // Add minute(s)
        else {
            date.setMinutes(date.getMinutes() + this.districts[this.container.dataset.district].addMinute);
        }
        return this.convertHourMinute(key, date, monthData);
    }

    setActiveClass() {
        // Active table row of current date
        let allRowTd = document.querySelectorAll("#dateContainer2 td");
        allRowTd.forEach((elem) => {
            if (elem.innerHTML == this.today()) {
                elem.parentNode.classList.add("active");           
            }
        });
        

        // Active button
        let selectedBtn = document.getElementById(this.container.dataset.month);
        selectedBtn.classList.add("active");
    }

    generateMonthButton() {
        this.months.forEach((month) => {
            let button = document.createElement("button");
            button.value = month.enName;
            button.innerHTML = month.bnName;
            button.className = "button";
            button.setAttribute("id", `${month.enName}`);
            this.buttonContainer.appendChild(button);
        });
    }

    generateDistrictSelect() {
        for (const [key, value] of Object.entries(this.districts)) {
            let option = document.createElement("option");
            option.value = key;
            option.innerHTML = value.bnName;
            this.districtSelect.appendChild(option);
        }
    }

    monthClick(e, allBtn) {
        let selectedBtn = document.getElementById(e.target.value);
        this.container.setAttribute("data-month", e.target.value);
        if (e.target.value == selectedBtn.id) {
            allBtn.forEach((btnOther) => {
                btnOther.classList.remove("active");
            });
            selectedBtn.classList.add("active");
        }
        // Filter month data
        let getSingleData = this.namajTimesArr.filter((elem) => {
            return elem.monthName == this.container.dataset.month;
        });
        this.generateData(getSingleData);
    }

    districtChange(e, place) {
        // Set data-district attribute in container div
        this.container.setAttribute("data-district", e.target.value);
        place.innerHTML = this.districts[e.target.value].bnName;

        // Filter month data
        let getSingleData = this.namajTimesArr.filter((elem) => {
            // Get data-month value using 'dataset' property
            return elem.monthName == this.container.dataset.month;
        });
        this.generateData(getSingleData);
    }

    today() {
        let dd = String(this.date.getDate()).padStart(2, "0");
        let mm = String(this.date.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = this.date.getFullYear();
        let todayDate = this.convertEnToBn(dd) + " " + this.months[mm - 1].bnName + ", " + this.convertEnToBn(yyyy);
        return todayDate;
    }

    convertEnToBn(numberParam) {
        let banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        let englishNo = numberParam.toString();
        let englishArr = englishNo.split("");
        let coonvertedBanglaArr = [];
        englishArr.forEach(function (item) {
            if (item == "-") {
                coonvertedBanglaArr.push("-");
            }
            if (item == ":") {
                coonvertedBanglaArr.push(":");
            }
            coonvertedBanglaArr.push(banglaNumbers[item]);
        });
        return coonvertedBanglaArr.join("");
    }

    convertIntoBanglaDate(yyyy, mm, dd) {
        let todayTime = this.convertEnToBn(dd) + " " + months[mm - 1].bnName + ", " + this.convertEnToBn(yyyy);
        return todayTime;
    }

    convertHourMinute(key, date, monthData) {
        let hour = String(date.getHours()).padStart(2, "0");
        let minute = String(date.getMinutes()).padStart(2, "0");
        date = hour + ":" + minute;

        const convertedDate = this.convertEnToBn(date) + " " + this.daySchedule[key].msg;
        return convertedDate;
    }    
}
