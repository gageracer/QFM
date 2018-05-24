export class User {

    generalInfo: {
        userType: usertype,
        userID: string,
        password: string,
        notificationToogle: boolean,
        mobilePhone: string,
        lastName: string,
        gender: string,
        firstName: string,
        email: string,
        birthday: string,
        photoPath: string
    };

    public seniorInfo: {
        seniorMajor: string,
        seniorDepartment: string,
        seniorCareerInterest: string,
        featuredSkills: string
    };

    public isMatched: boolean;
    public isApproved: boolean;

    public alumniInfo: {
        alumniWorkExperience: string,
        alumniIndustry: string,
        alumniEducation: string,
        alumniCurrentPosition: string,
        alumniCountryIn: string
    };


    // tslint:disable-next-line:max-line-length
    constructor(name: string, lastName?: string, userType?: usertype, password?: string, email?: string, mobilePhone?: string, gender?: string, birthday?: string ) {
        this.generalInfo.firstName = name;
        this.generalInfo.lastName = lastName;
        this.generalInfo.userType = userType;
        this.generalInfo.password = password;
        this.generalInfo.email = email;
        this.generalInfo.birthday = birthday;
        this.generalInfo.gender = gender;
        this.generalInfo.mobilePhone = mobilePhone;
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
