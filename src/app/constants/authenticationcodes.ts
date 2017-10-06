export class AuthenticationCodes{

  public static readonly SUPER_ADMIN: number = 1;
  public static readonly ADMIN: number = 2;
  public static readonly NORMAL: number = 3;
  public static readonly GUEST: number = 4;


  // top level codes
  public static readonly KEY_NOT_FOUND = 50;
  public static readonly IDENTITY_NOT_RECOGNZIED = 51;
  public static readonly INVALID_USERNAME_PASSWORD = 52;
  public static readonly AUTHENTICATED = 54;

  //user codes
  public static readonly INVALID_USER_ID_PASSWORD = 55;
  public static readonly USER_AUTHENTICATED = 56;

  //primary codes

  public static readonly TRANSACTION_SUCCESS = 58;
  public static readonly TRANSACTION_FAILED = 59;

  //secondary codes

  public static readonly INSERT_DATA_SUCCESS = 60;
  public static readonly INSERT_DATA_FAILED = 61;

  public static readonly UPLOAD_IMAGE_SUCCESS = 62;
  public static readonly UPLOAD_IMAGE_FAILED = 63;

  public static readonly UPDATE_DATA_SUCCESS = 64;
  public static readonly UPDATE_DATA_FAILED = 65;

  public static readonly DELETE_DATA_SUCCESS = 66;
  public static readonly DELETE_DATA_FAILED = 67;

  public static readonly FETCH_DATA_SUCCESS = 68;
  public static readonly FETCH_DATA_FAILED = 69;
}
