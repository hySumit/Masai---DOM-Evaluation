function Student(name, roll_no, classVal, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.classVal = classVal;
    this.section = section;
    this.marks = marks;

    this.printSubs = function () {
        const subjects = Object.keys(this.marks);
        const top3Subjects = subjects.sort((a, b) => this.marks[b] - this.marks[a]).slice(0, 3);
        console.log('Top Three Subjects:', top3Subjects.join(', '));
    };

    this.printReportCard = function () {
        const totalMarks = Object.values(this.marks).reduce((total, mark) => total + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;

        console.log('+---------------------------+');
        console.log('|        REPORT CARD       |');
        console.log('+---------------------------+');
        console.log(`| Name     - ${this.name}         `);
        console.log(`| Roll no. - ${this.roll_no}             `);
        console.log(`| Class    - ${this.classVal}              `);
        console.log(`| Section  - ${this.section}             `);

        for (const subject in this.marks) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.replace('_', ' ').slice(1)} - ${this.marks[subject]}`);
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

student.printSubs();
student.printReportCard();
