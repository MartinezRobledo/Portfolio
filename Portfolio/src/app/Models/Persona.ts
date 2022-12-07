export class Persona{
    name:string;
    lastname:string;
    birthdate:string;
    address:string;
    birthplace:string;
    phone:number;
    studyLevel:string;
    email:string;
    ocupation:string;
    degree:string[];
    urlphoto:string;

    constructor(name:string,lastname:string,birthdate:string,address:string,birthplace:string,phone:number,
                studyLevel:string,email:string,ocupation:string,degree:string[],urlphoto:string){
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.address = address;
        this.birthplace = birthplace;
        this.phone = phone;
        this.studyLevel = studyLevel;
        this.email = email;
        this.ocupation = ocupation;
        this.degree = degree;
        this.urlphoto = urlphoto;
    }
}