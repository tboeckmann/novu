import {
  ChannelTypeEnum,
  // ISendMessageSuccessResponse,
  IEmailOptions,
  IEmailProvider,
} from '@novu/stateless';

import { Mailchain } from '@mailchain/sdk';
export class MailchainEmailProvider implements IEmailProvider {
  channelType = ChannelTypeEnum.EMAIL as ChannelTypeEnum.EMAIL;
  id = 'mailchain';

  private mailchainClient: Mailchain;
  constructor(
    private config: {
      secretKey: string;
      from: string;
    }
  ) {
    this.mailchainClient = Mailchain.fromSecretRecoveryPhrase(
      this.config.secretKey
    );
  }

  async sendMessage(options: IEmailOptions): Promise<any> {
    return await this.mailchainClient.sendMail({
      from: options.from || this.config.from,
      to: options.to,
      subject: options.subject,
      content: {
        html: options.html,
        text: options.text,
      },
    });
  }
}
