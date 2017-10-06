export class Notification{

  private _id: number;
  private _refId: number;
  private _content: string;
  private _publishedDate: string;
  private _type: string;
  private _authorId: number;

  private _authorFirstname: string;
  private _authorLastname: string;
  private _authorImageFile: string;

  constructor(id: number, refId: number, content: string, authorId: number, publishedDate: string, type: string,
              authorFirstname: string, authorLastname: string, authorImageFile: string){
    this._id = id;
    this._refId = refId;
    this._content = content;
    this._publishedDate = publishedDate;
    this._type = type;
    this._authorId = authorId;

    this._authorFirstname = authorFirstname;
    this._authorLastname = authorLastname;
    this._authorImageFile = authorImageFile;
  }

  get id(): number{
    return this._id;
  }

  get type(): string{
    return this._type;
  }

  get content(): string{
    return this._content;
  }

  get publishedDate(): string{
    return this._publishedDate;
  }

  get authorId(): number{
    return this.authorId;
  }

  get authorFirstname(): string{
    return this._authorFirstname
  }

  get authorLastname(): string{
    return this._authorLastname;
  }

  get authorImageFile(): string{
    return this._authorImageFile
  }
}
