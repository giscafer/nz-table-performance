
import { HttpClient } from "@angular/common/http";
import { NzNotificationService } from "ng-zorro-antd";

export class IpsApiService {
  md5;
  _cacheData: any = {};

  constructor(
    http: HttpClient,
    private _notification: NzNotificationService,
  ) {
  }

  /**
   *  ips接口请求兼容
   * @param args
   */
  call(...args: any[]) {
    if (args.length < 1) {
      throw new Error("At least one argument for $rpc call ");
    }
    let name = args[0];
    args = args.slice(1);
    name = name.substring(0, 1).toLowerCase() + name.substring(1);
    const request = {
      name: name,
      args: args
    };
  }

}
