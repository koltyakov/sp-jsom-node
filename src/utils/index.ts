import * as spauth from 'node-sp-auth';
import * as spRequest from 'sp-request';
import { ISPRequest } from 'sp-request';
import * as url from 'url';

import { IAuthContext } from '../interfaces';

export class Utils {

    private spr: ISPRequest;
    private ctx: IAuthContext;

    constructor(context: IAuthContext) {
        this.ctx = context;
    }

    public getAuthOptions = (): Promise<any> => {
        return <any>spauth.getAuth(this.ctx.siteUrl, this.ctx.authOptions);
    }

    public getCachedRequest = (spr: ISPRequest): ISPRequest => {
        this.spr = spr || spRequest.create(this.ctx.authOptions);
        return this.spr;
    }

}
