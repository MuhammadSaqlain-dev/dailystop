import { ID, Response } from '../../../../../../_metronic/helpers'

export type User = {
  id?: ID;
  avatar?: string;
  role?: string;
  position?: string;
  name: string;
  email: string;
  address: string;
  type?: string;
  dateStart?: string;
  dateEnd?: string;
  value?: number;
  limit?: number;
  last_login?: string; // Added last_login field
  joined_day?: string; // Added joined_day field
  two_steps?: boolean; // Added two_steps field
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  id: undefined,
  avatar: '',
  role: '',
  position: '',
  name: '',
  email: '',
  address: '',
  type: '',
  dateStart: '',
  dateEnd: '',
  value: 0,
  limit: 0,
  last_login: '', // Initialize last_login
  joined_day: '', // Initialize joined_day
  two_steps: false, // Initialize two_steps
}
