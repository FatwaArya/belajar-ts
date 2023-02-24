export interface Student {
  id: number;
  name: string;
  address: string;
  major: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface GetUserResponse {
  data: User[];
}
