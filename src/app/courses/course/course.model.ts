export class Course {
    constructor(
        public id: string,
        public courseName: string,
        public language: string,
        public date: Date,
        public validityPeriod: string
    ) { }
}