// File: student_management.js
// Description: A console-based Student Management System that stores student
//              examination records and generates a performance report.
// Assignment Number: 11
// Name: Peter Sagoe Acquaye Hutchful
// SID: 2425403164
// Email: hutchfulpeter123@gmail.com
// Grader: Mr. Augustus Buckman
// On my honor, Peter Sagoe Acquaye Hutchful, this programming assignment is my own work
// and I have not provided this code to any other student.

class Student {
    constructor(studentId, studentName, course, score) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.course = course;
        this.score = score;
    }

    // Return the letter grade that matches the student's score.
    getGrade() {
        if (this.score >= 80) {
            return "A";
        } else if (this.score >= 70) {
            return "B";
        } else if (this.score >= 60) {
            return "C";
        } else if (this.score >= 50) {
            return "D";
        } else {
            return "F";
        }
    }

    // A score of 50 or above is a pass.
    hasPassed() {
        if (this.score >= 50) {
            return true;
        } else {
            return false;
        }
    }

    // A score of 90 or above is considered excellent.
    isExcellent() {
        if (this.score >= 90) {
            return true;
        } else {
            return false;
        }
    }

    // Calculate and return the average score for a list of students.
    static calculateAverage(studentList) {
        let totalScore = 0;

        for (const student of studentList) {
            totalScore = totalScore + student.score;
        }

        if (studentList.length > 0) {
            return totalScore / studentList.length;
        } else {
            return 0;
        }
    }
}

const students = [
    new Student("CS001", "Ama", "CSSD204", 78),
    new Student("CS002", "Kwame", "CSSD204", 92),
    new Student("CS003", "Akosua", "CSSD204", 67),
    new Student("CS004", "Yaw", "CSSD204", 55),
    new Student("CS005", "Kojo", "CSSD204", 84),
    new Student("CS006", "Abena", "CSSD204", 49),
    new Student("CS007", "Kofi", "CSSD204", 73),
    new Student("CS008", "Efua", "CSSD204", 95)
];

function findHighestScore(studentList) {
    let highestScore = studentList[0].score;

    for (const student of studentList) {
        if (student.score > highestScore) {
            highestScore = student.score;
        }
    }

    return highestScore;
}

function findLowestScore(studentList) {
    let lowestScore = studentList[0].score;

    for (const student of studentList) {
        if (student.score < lowestScore) {
            lowestScore = student.score;
        }
    }

    return lowestScore;
}

function getPassedStudents(studentList) {
    const passedStudents = [];

    for (const student of studentList) {
        if (student.hasPassed()) {
            passedStudents.push(student);
        }
    }

    return passedStudents;
}

function getFailedStudents(studentList) {
    const failedStudents = [];

    for (const student of studentList) {
        if (!student.hasPassed()) {
            failedStudents.push(student);
        }
    }

    return failedStudents;
}

// Arrow function required by the assignment.
const getExcellentStudents = (studentList) => {
    const excellentStudents = [];

    for (const student of studentList) {
        if (student.isExcellent()) {
            excellentStudents.push(student);
        }
    }

    return excellentStudents;
};

function displayStudentSection(sectionTitle, studentList, showGrade) {
    console.log("\n" + sectionTitle);

    for (const student of studentList) {
        if (showGrade) {
            console.log(
                student.studentId + " " + student.studentName +
                " (" + student.getGrade() + ")"
            );
        } else {
            console.log(student.studentId + " " + student.studentName);
        }
    }
}

function generateStudentReport(studentList) {
    const highestScore = findHighestScore(studentList);
    const lowestScore = findLowestScore(studentList);
    const averageScore = Student.calculateAverage(studentList);
    const passedStudents = getPassedStudents(studentList);
    const failedStudents = getFailedStudents(studentList);
    const excellentStudents = getExcellentStudents(studentList);

    console.log("==============================");
    console.log("STUDENT MANAGEMENT REPORT");
    console.log("==============================");
    console.log("\nTotal Students : " + studentList.length);
    console.log("\nHighest Score  : " + highestScore);
    console.log("\nLowest Score   : " + lowestScore);
    console.log("\nAverage Score  : " + averageScore.toFixed(2));

    displayStudentSection("Students Passed", passedStudents, true);
    displayStudentSection("Students Failed", failedStudents, true);
    displayStudentSection("Excellent Students", excellentStudents, false);
}

generateStudentReport(students);
