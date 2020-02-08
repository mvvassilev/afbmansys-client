export class Course {
    constructor(
        private id: string,
        private courseName: string,
        private language: string,
        private date: Date,
        private validityPeriod: string
    ) { }
}