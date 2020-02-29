export class Course {
    constructor(
        public id: string,
        public courseName: string,
        public language: string,
        public date: string,
        public validityPeriod: string
    ) { }
}