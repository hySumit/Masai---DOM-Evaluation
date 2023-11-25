function Student(name, roll_no, classVal, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classVal = classVal;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        const top3Subjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]).slice(0, 3);
        console.log('Top Three Subjects:', top3Subjects.join(', '));
    };

    this.printReportCard = function () {
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, mark) => total + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        console.log('+---------------------------+');
        console.log('|        REPORT CARD       |');
        console.log('+---------------------------+');
        console.log(`| Name     - ${this.name}         `);
        console.log(`| Roll no. - ${this.roll_no}             `);
        console.log(`| Class    - ${this.classVal}              `);
        console.log(`| Section  - ${this.section}             `);

        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.replace('_', ' ').slice(1)} - ${this.marks_of_5_subjects[subject]}`);
        }

        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log('+---------------------------+');
    };
}

const student = new Student('Sumit', 16, 'S', 'D', {
    science: 52,
    maths: 45,
    social_science: 39,
    english: 30,
    hindi: 37
});

student.printTop3Subjects();
student.printReportCard();
