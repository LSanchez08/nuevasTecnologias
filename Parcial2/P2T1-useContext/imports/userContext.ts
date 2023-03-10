import { createContext } from "react";

export interface User {
  id: number,
  name: string,
  lastName: string,
  age: number,
  department:string,
  startingDate: string,
  city: string,
  state: string,
  country: string,
};

export const UserContext = createContext<User>({
  id: 0,
  name: 'Luis',
  lastName: 'Sánchez',
  age: 22,
  department: 'Sales',
  startingDate: '06/20/2020',
  city: 'Mérida',
  state: 'Yucatán',
  country: 'México'
});
