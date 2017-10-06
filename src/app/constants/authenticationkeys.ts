export class AuthenticationKeys{

  public static readonly IDENTIFICATION_KEY = "7390133d8c4397b2235533641a12d4cf";
  public static readonly USERNAME_KEY = "d76be0a37d04300df8c6be28e5975953";
  public static readonly PASSWORD_KEY = "b889238e4c5d4cff610b6c52b3bd8f30";
  public static readonly VERSION_KEY = "3a52476284de065aa73e996878e1a44c";

  public static readonly USER_ID_KEY = "803bf6c72c2832fe54828732420f124f";
  public static readonly USER_PASSWORD_KEY = "e8f1aeab7bd2b93c6265681ba8e4e2aa";

  public static readonly IDENTIFICATION_VALUE = "eabc1bc0a168a8225eca9967039890f0";
  public static readonly USERNAME_VALUE = "8366c9a646726fac5656189b3ff8ab4f";
  public static readonly PASSWORD_VALUE = "c66cbae47f40841971b6fc97b20c853c";

  public static getAuthentication(): {[k: string] : string}{

    return {"7390133d8c4397b2235533641a12d4cf": AuthenticationKeys.IDENTIFICATION_VALUE,
      "d76be0a37d04300df8c6be28e5975953": AuthenticationKeys.USERNAME_VALUE,
      "b889238e4c5d4cff610b6c52b3bd8f30": AuthenticationKeys.PASSWORD_VALUE};
  }
}
