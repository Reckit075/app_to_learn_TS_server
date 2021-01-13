/* eslint-disable prettier/prettier */
import * as mongose from "mongoose";


export const UserSchema = new mongose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
});


export interface User extends mongose.Document{
  id: string;
  name: string;
  password: string;
}