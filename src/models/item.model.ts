/* eslint-disable prettier/prettier */
import * as mongose from "mongoose";


export const ItemSchema = new mongose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, required: true},
});

// to jest Dto
export interface Item extends mongose.Document{
  id: string;
  title: string;
  author: string;
  description: string;
}