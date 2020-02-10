export class Member {
    constructor(
        public id: string,
        public name: string,
        public personalID: string,
        public major: string,
        public sex: string,
        public photo: string,
        public phoneNumber: string,
        public registerDate: Date,
        public region: string,
        public membershipID: string,
        public registerAddress: string,
        public mainAddress: string,
        public workAddress: string,
        public email: string,
        public workContractID: string,
        public declaration: boolean,
        public penaltyID: string
    ) { }
}