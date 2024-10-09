
export interface ReqRes {
    ourUsers: ourUsers;
    error: string;
    message: string;
    token: string;
    refreshToken: string;
    expirationTime: string;
    email: string;
    role: string ;
    password: string ;
    confirmPassword: string;
    firstName: string ;
    lastName: string ;
    birthday: Date ;
    phoneNumber: string ;
    speciality: string ;
    pictureUrl: string ;
  }
  
  export interface ourUsers{
    id: string
    role: string;
    email: string;
    password: string ;
    firstName: string ;
    lastName: string ;
    birthday: Date ;
    confirmPassword: string;
    phoneNumber: string ;
    speciality: string ;
    pictureUrl: string ;
  }
  