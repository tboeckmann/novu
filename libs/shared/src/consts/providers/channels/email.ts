import {
  mailerSendConfig,
  mailgunConfig,
  mailjetConfig,
  mailJsConfig,
  mandrillConfig,
  netCoreConfig,
  nodemailerConfig,
  postmarkConfig,
  sendgridConfig,
  sendinblueConfig,
  sesConfig,
  outlook365Config,
  infobipEmailConfig,
  resendConfig,
  mailchainConfig,
} from '../credentials';
import { IProviderConfig } from '../provider.interface';
import { EmailProviderIdEnum } from '../provider.enum';

import { ChannelTypeEnum } from '../../../types';

export const emailProviders: IProviderConfig[] = [
  {
    id: EmailProviderIdEnum.Mailgun,
    displayName: 'Mailgun',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailgunConfig,
    docReference: 'https://documentation.mailgun.com/en/latest/',
    logoFileName: { light: 'mailgun.svg', dark: 'mailgun.svg' },
  },
  {
    id: EmailProviderIdEnum.Mailjet,
    displayName: 'Mailjet',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailjetConfig,
    docReference: 'https://documentation.mailjet.com/hc/en-us/categories/360003942934-Mailjet-Documentation-Center-',
    logoFileName: { light: 'mailjet.png', dark: 'mailjet.png' },
  },
  {
    id: EmailProviderIdEnum.Mandrill,
    displayName: 'Mandrill',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mandrillConfig,
    docReference: 'https://mandrillapp.com/docs/?_ga=1.34114145.1141874178.1422518109',
    logoFileName: { light: 'mandrill.svg', dark: 'mandrill.svg' },
  },
  {
    id: EmailProviderIdEnum.Postmark,
    displayName: 'Postmark',
    channel: ChannelTypeEnum.EMAIL,
    credentials: postmarkConfig,
    docReference: 'https://postmarkapp.com/developer',
    logoFileName: { light: 'postmark.png', dark: 'postmark.png' },
  },
  {
    id: EmailProviderIdEnum.SendGrid,
    displayName: 'SendGrid',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sendgridConfig,
    docReference: 'https://docs.sendgrid.com/',
    logoFileName: { light: 'sendgrid.png', dark: 'sendgrid.png' },
  },
  {
    id: EmailProviderIdEnum.Sendinblue,
    displayName: 'Sendinblue',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sendinblueConfig,
    docReference: 'https://www.sendinblue.com/',
    logoFileName: { light: 'sendinblue.png', dark: 'sendinblue.png' },
  },
  {
    id: EmailProviderIdEnum.SES,
    displayName: 'SES',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sesConfig,
    docReference: 'https://docs.aws.amazon.com/ses/index.html',
    logoFileName: { light: 'ses.svg', dark: 'ses.svg' },
  },
  {
    id: EmailProviderIdEnum.NetCore,
    displayName: 'NetCore',
    channel: ChannelTypeEnum.EMAIL,
    credentials: netCoreConfig,
    docReference: 'https://netcorecloud.com/email/email-api/',
    logoFileName: { light: 'netcore.png', dark: 'netcore.png' },
  },
  {
    id: EmailProviderIdEnum.CustomSMTP,
    displayName: 'Custom SMTP',
    channel: ChannelTypeEnum.EMAIL,
    credentials: nodemailerConfig,
    docReference: 'https://nodemailer.com/about/',
    logoFileName: { light: 'custom_smtp.svg', dark: 'custom_smtp.svg' },
  },
  {
    id: EmailProviderIdEnum.MailerSend,
    displayName: 'MailerSend',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailerSendConfig,
    docReference: 'https://developers.mailersend.com/',
    logoFileName: { light: 'mailersend.svg', dark: 'mailersend.svg' },
  },
  {
    id: EmailProviderIdEnum.Outlook365,
    displayName: 'Microsoft Outlook365',
    channel: ChannelTypeEnum.EMAIL,
    credentials: outlook365Config,
    docReference: 'https://docs.microsoft.com/en-us/outlook/rest/node-tutorial',
    logoFileName: { light: 'outlook365.png', dark: 'outlook365.png' },
  },
  {
    id: EmailProviderIdEnum.Infobip,
    displayName: 'Infobip',
    channel: ChannelTypeEnum.EMAIL,
    credentials: infobipEmailConfig,
    docReference: 'https://www.infobip.com/docs',
    logoFileName: { light: 'infobip.png', dark: 'infobip.png' },
  },
  {
    id: EmailProviderIdEnum.Resend,
    displayName: 'Resend',
    channel: ChannelTypeEnum.EMAIL,
    credentials: resendConfig,
    docReference: 'https://resend.com/docs',
    logoFileName: { light: 'resend.svg', dark: 'resend.svg' },
  },
  {
    id: EmailProviderIdEnum.Mailchain,
    displayName: 'Mailchain Web3 Email',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailchainConfig,
    docReference: 'https://docs.mailchain.com/',
    logoFileName: { light: 'mailchain-onlight.svg', dark: 'mailchain-ondark.svg' },
  },
];
