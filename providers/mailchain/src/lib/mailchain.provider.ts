import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  IEmailOptions,
  IEmailProvider,
  ICheckIntegrationResponse,
  CheckIntegrationResponseEnum,
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
        text: options.text || options.html,
      },
    });
  }

  private createMailData(options: IEmailOptions) {
    const mailData = {
      from: options.from || this.config.from,
      to: ['0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com'],
      cc: options.cc,
      bcc: options.bcc,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html,
      replyTo: options.replyTo || options.from || this.config.from,
    };

    return mailData;
  }

  async checkIntegration(
    options: IEmailOptions
  ): Promise<ICheckIntegrationResponse> {
    try {
      const mailData = this.createMailData(options);

      const response = await this.sendMessage(mailData);

      return {
        success: true,
        message: 'Integration Successful',
        code: CheckIntegrationResponseEnum.SUCCESS,
      };
    } catch (error) {
      return {
        success: false,
        message: error?.message,
        code: CheckIntegrationResponseEnum.FAILED,
      };
    }
  }
}
