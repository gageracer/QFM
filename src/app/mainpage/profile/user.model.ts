export class User {

    public userType: usertype;
    public userID: string;
    private password: string;
    public notificationToogle: boolean;
    public mobilePhone: string;
    public lastName: string;
    public gender: string;
    public firstName: string;
    public email: string;
    public birthday: string;
    public photoPath: string;

    public seniorMajor: string;
    public seniorDepartment: string;
    public seniorCareerInterest: string;
    public featuredSkills: string;

    public isMatched: boolean;
    public isApproved: boolean;

    public alumniWorkExperience: string;
    public alumniIndustry: string;
    public alumniEducation: string;
    public alumniCurrentPosition: string;
    public alumniCountryIn: string;


    constructor(name: string, lastName: string, userType: usertype, password: string, email: string, ) {
        this.firstName = name;
        this.lastName = lastName;
        this.userType = userType;
        this.password = password;
        this.email = email;
    }
}

enum usertype {
    Admin = 0,
    Manager = 1,
    Alumni_Mentor = 2,
    Senior_Mentor = 3,
    Senior_Mentee = 4,
    Senior_Mentor_Mentee = 5
}
