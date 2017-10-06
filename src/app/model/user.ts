export class User{

  private _id: number;
  private _password: string;
  private _type: number;

  constructor(id: number, password: string, type: number){
    this._id = id;
    this._password = password;
    this._type = type;

  }

  get id(): number{
    return this._id;
  }

  get password(): string{
    return this._password;
  }

  get type(): number{
    return this._type;
  }
}
