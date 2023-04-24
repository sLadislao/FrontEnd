import { Gender } from '../gender/gender.types';
import { Degree } from '../degree/degree.types';

export interface Student {
  id: number,
  name: string,
  ssn: string;
  birthday: string,
  phone: string,
  address: string,
  email: string,
  gender: Gender,
  degree: Degree
}
