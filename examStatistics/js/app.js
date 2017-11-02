var dataController = (function () {

    var data = {
        passed: [],
        failed: []
    };

    //student constructor
    function Student(studentName) {
        this.studentName = studentName;
    }

    Student.prototype.getInfo = function () {
        return this.studentName;
    }

    //EXAM constructor
    function Exam(student, grade, subject) {
        this.student = student;
        this.grade = grade;
        this.subject = subject;
        this.passed = grade > 5;
    }

    Exam.prototype.getInfo = function () {
        return this.student.getInfo() + ' - ' + this.subject + '  ' + this.grade;
    };


    // function getTotalNum() {
    //     return data.passed.length + data.failed.length;
    // }
    function getPassedNum() {
        return data.passed.length;
    }
    function getFailedNum() {
        return data.failed.length;
    }
    function getFailedPercent() {
        return Math.round((data.failed.length / totalNumbOfStudents()) * 100);
    }
    function getPassedPercent() {
        return Math.round((data.passed.length / totalNumbOfStudents()) * 100);
    }

    //addExam
    function addExam(studentName, grade, subject) {
        var student = new Student(studentName);
        var exam = new Exam(student, grade, subject);
        
        if (exam.grade > 5) {
            data.passed.push(exam);
        } else if (exam.grade == 5) {
            data.failed.push(exam);
        }

        return exam;
    }

    //TOTAL NUMB OF STUDENTS
    function totalNumbOfStudents() {
        return data.passed.length + data.failed.length;
    }

    //TEST!!
    function logData() {
        console.log(data);
    }

    return {
        addExam: addExam,
        totalNumbOfStudents: totalNumbOfStudents,
        // getTotalNum: getTotalNum,
        getPassedNum: getPassedNum,
        getFailedNum: getFailedNum,
        getFailedPercent: getFailedPercent,
        getPassedPercent: getPassedPercent,
        //test
        test: logData
    }

})();

var UIController = (function () {
    
    //DOMStrings
    var DOMStrings = {
        addButton: ".add-btn",
        name: ".add-student-name",
        grade: ".add-grade", 
        subject: ".add-subject",
        error: "#input_error",
        numbOfStudents: "#numbOfStudents",
        month: ".exam-title-month",
        outputPassed: '.passed-list',
        outputFailed: '.failed-list',
        outputPassedCount: '.exam-passed-count',
        outputFailedCount: '.exam-failed-count',
        outputPassedPercent: '.exam-passed-percentage',
        outputFailedPercent: '.exam-failed-percentage',
    }

    function getDOMStrings() {
        return DOMStrings;
    }

    function displayDate() {
        const months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];

        let monthEl = $(DOMStrings.month);
        const month = new Date().getMonth();
    
        monthEl.text(months[month]);


    }

    //collect input
    function collectInput() {
        var nameEl = document.querySelector(DOMStrings.name);
        var gradeEl = document.querySelector(DOMStrings.grade);
        var subjectSelectEl = document.querySelector(DOMStrings.subject);
        var subjectOptionEl = subjectSelectEl[subjectSelectEl.selectedIndex];

        var result = {
            studentName: nameEl.value,
            grade: gradeEl.value,
            subject: subjectOptionEl.text
        }
        console.log(result);
        return result;
    }

    //clear input
    function clearInput() {
        document.querySelector(DOMStrings.name).value = '';
        document.querySelector(DOMStrings.grade).value = '';
    }

    
    function displayResults(stats1, stats2, pPercent, fPercent) {
        $(DOMStrings.outputPassedCount).text(stats1);
        $(DOMStrings.outputFailedCount).text(stats2);
        $(DOMStrings.outputPassedPercent).text(pPercent + "%");
        $(DOMStrings.outputFailedPercent).text(fPercent + "%");
    }
    var i = 0;
    var j = 0;
    function displayStudent(exam) {
        var passedList = $(DOMStrings.outputPassed);
        var failedList = $(DOMStrings.outputFailed);
        if (exam.passed) {
            var output01 = $('<div class="item clearfix" id="passed-' + i + '"></div>');
            passedList.append(output01);
            var output02 = $('<div class="item-description">' + exam.student.getInfo() + '</div>');
            output01.append(output02);
            var output03 = $('<div class="right clearfix"></div>');
            output01.append(output03);
            var output04 = $('<div class="item-value">' + exam.grade + '</div>');
            output03.append(output04);
            var output05 = $('<div class="item-delete"></div>');
            output03.append(output05);
            var output06 = $('<button class="item-delete-btn">x</button>');
            output05.append(output06);
            i++;
        } else {
            var output01 = $('<div class="item clearfix" id="failed-' + j + '"></div>');
            failedList.append(output01);
            var output02 = $('<div class="item-description">' + exam.student.getInfo() + '</div>');
            output01.append(output02);
            var output03 = $('<div class="right clearfix"></div>');
            output01.append(output03);
            var output04 = $('<div class="item-value">' + exam.grade + '</div>');
            output03.append(output04);
            var output05 = $('<div class="item-delete"></div>');
            output03.append(output05);
            var output06 = $('<button class="item-delete-btn">x</button>');
            output05.append(output06);
            j++;
        }
    }

    //display numb of students
    function displayNumbOfStudents() {
        var students = document.querySelector(DOMStrings.numbOfStudents);

        students.textContent = ' ' + dataController.totalNumbOfStudents();
        
    }


    //ERROR
    /*function displayError(input) {
        
    }*/



    return {
        DOMStrings: getDOMStrings,
        getInput: collectInput,
        clear: clearInput,
        numbOfStudents: displayNumbOfStudents,
        displayDate: displayDate,
        displayResults: displayResults,
        displayStudent: displayStudent
    }

})();

var mainController = (function (UIctrl, dataCtrl) {
    
    function setUpEventListeners() {
          //display date
          UIctrl.displayDate();
        var DOM = UIctrl.DOMStrings();
        
        document.querySelector(DOM.addButton).addEventListener('click', function () {
            addExamResults();
        });
    }

    //main func
    function addExamResults() {

        //collect input
        var input = UIctrl.getInput();

        //validate

        //addExam
        var exam = dataCtrl.addExam(input.studentName, input.grade, input.subject);

        //reset input
        UIctrl.clear();

        //display numb of students
        UIctrl.numbOfStudents();

        UIctrl.displayStudent(exam);
        
        //displayResult
        UIctrl.displayResults(dataCtrl.getPassedNum(), dataCtrl.getFailedNum(), dataCtrl.getPassedPercent(), dataCtrl.getFailedPercent());
        
        //test
        dataCtrl.test();

    }



    return {
        init: function () {
            setUpEventListeners();
            console.log('App has started.')
        }
    }

})(UIController, dataController);

mainController.init();