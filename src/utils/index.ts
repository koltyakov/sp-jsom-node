export default class Utils {

  public static isOnPrem (url: string): boolean {
    return url.indexOf('.sharepoint.com') === -1 && url.indexOf('.sharepoint.cn') === -1;
  }

  public static isUrlHttps (url: string): boolean {
    return url.split('://')[0].toLowerCase() === 'https';
  }

  public static isUrlAbsolute (url: string): boolean {
    return url.indexOf('http:') === 0 || url.indexOf('https:') === 0;
  }

  public static combineUrl (...args: string[]): string {
    return args.join('/').replace(/(\/)+/g, '/').replace(':/', '://');
  }

}
