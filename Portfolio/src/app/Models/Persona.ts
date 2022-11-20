export class Persona{
    name:string;
    lastname:string;
    birthdate:string;
    location:string;
    birthplace:string;
    phone:number;
    level:string;
    email:string;
    ocupation:string;
    titulo:string[];

    constructor(name:string,lastname:string,birthdate:string,location:string,birthplace:string,phone:number,
                level:string,email:string,ocupation:string,titulo:string[]){
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.location = location;
        this.birthplace = birthplace;
        this.phone = phone;
        this.level = level;
        this.email = email;
        this.ocupation = ocupation;
        this.titulo = titulo;
    }
}