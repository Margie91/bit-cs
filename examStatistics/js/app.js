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
    }

    Exam.prototype.getInfo = function () {
        return this.student.getInfo() + ' - ' + this.subject + '  ' + this.grade;
    };


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
        passedList: ".passed-list",
        failedList: ".failed-list",
        numbOfStudents: "#numbOfStudents"
    }

    function getDOMStrings() {
        return DOMStrings;
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

    //display passed and failed  ISPRAVI
    function displayPassed(exam) {
        var pass = document.querySelector(DOMStrings.passedList);

        var output = '<p>' + exam.getInfo() + '</p>';
    
        pass.textContent = output;
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
        displayPassed: displayPassed,
        numbOfStudents: displayNumbOfStudents
    }

})();

var mainController = (function (UIctrl, dataCtrl) {
    
    function setUpEventListeners() {
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
        
        //displayResult
        UIctrl.displayPassed(exam);
        
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