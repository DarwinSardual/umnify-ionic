export class Announcement{

  private _id: number;
  private _title: string;
  private _content: string;
  private _imageFile: string;
  private _authorId: number;
  private _createdDate: string;
  private _publishedDate: string;
  private _signature: number;

  private _authorFirstname:string;
  private _authorLastname: string;
  private _authorImageFile: string;

  constructor(id: number, title: string, content: string, imageFile: string, authorId: number,
              createdDate: string, publishedDate: string, signature: number,
              authorFirstname: string, authorLastname: string, authorImageFile: string){

    this._id = id;
    this._title = title;
    this._content = content;
    this._imageFile = imageFile;
    this._authorId = authorId;
    this._createdDate = createdDate;
    this._publishedDate = publishedDate;
    this._signature = signature;

    this._authorFirstname = authorFirstname;
    this._authorLastname = authorLastname;
    this._authorImageFile = authorImageFile;

  }

  get id(): number{
    return this._id;
  }

  get title(): string{
    return this._title;
  }

  get content(): string{
    return this._content;
  }

  get imageFile(): string{
    return this._imageFile;
  }

  get authorId(): number{
    return this._authorId;
  }

  get createdDate(): string{
    return this._createdDate;
  }

  get publishedDate(): string{
    return this._publishedDate;
  }

  get signature(): number{
    return this._signature;
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
