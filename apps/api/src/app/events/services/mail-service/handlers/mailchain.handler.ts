import { ChannelTypeEnum } from '@novu/shared';
import { ICredentials } from '@novu/dal';
import { MailchainEmailProvider } from '@novu/mailchain';
import { BaseHandler } from './base.handler';

export class MailchainHandler extends BaseHandler {
  constructor() {
    super('mailchain', ChannelTypeEnum.EMAIL);
  }

  buildProvider(credentials: ICredentials, from: string) {
    const config: { secretKey: string; from: string } = {
      secretKey: credentials.secretKey as string,
      from,
    };

    this.provider = new MailchainEmailProvider(config);
  }
}
