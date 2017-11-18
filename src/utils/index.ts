export class Utils {

  public isOnPrem (url: string): boolean {
    return url.indexOf('.sharepoint.com') === -1 && url.indexOf('.sharepoint.cn') === -1;
  }

  public isUrlHttps (url: string): boolean {
    return url.split('://')[0].toLowerCase() === 'https';
  }

  public isUrlAbsolute (url: string): boolean {
    return url.indexOf('http:') === 0 || url.indexOf('https:') === 0;
  }

  public combineUrl (...args: string[]): string {
    return args.join('/').replace(/(\/)+/g, '/').replace(':/', '://');
  }

}
