export class PatientModel 
{ 
    constructor(
        public id: string, 
        public resourceType: string, 
        public name: [{ HumanName }], 
        public telecom: [{ ContactPoint }], 
        public active: boolean, 
        public gender: string, 
        public birthDate: Date, 
        public deceasedBoolean: boolean, 
        public deceasedDateTime: Date, 
        public multipleBirthBoolean: boolean, 
        public multipleBirthInteger: number,) { } 
    } 
    
    export class HumanName { 
        constructor() { } 
    } 
    
    export class ContactPoint { 
        constructor() { } 
    }