export class Member {
    constructor(
        private id:string,
        private name:string, 
        private personalID:string,
        private major: string,
        private sex: string,
        private photo: string,
        private phoneNumber: string,
        private registerDate: Date,
        private region: string,
        private membershipID: string,
        private registerAddress: string,
        private mainAddress: string,
        private workAddress: string,
        private email: string,
        private workContractID: string,
        private declaration: boolean,
        private penaltyID: string
    ) {}
}