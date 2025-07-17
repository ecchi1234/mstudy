import { ObjectId } from 'mongodb';

interface IUserConstructor {
  _id: ObjectId; // Unique identifier for the user
  username: string; // Username of the user
  email: string; // Email address of the user
  password: string; // Hashed password of the user
  createdAt: Date; // Timestamp of when the user was created
  updatedAt: Date; // Timestamp of the last update to the user
}

export default class User {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUserConstructor) {
    this._id = user._id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = user.updatedAt || new Date();
  }
}
