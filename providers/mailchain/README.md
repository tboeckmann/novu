# Novu Mailchain Provider

A Mailchain email provider library for [@novu/node](https://github.com/novuhq/novu)

## Usage

```javascript
import { MailchainEmailProvider } from '@novu/mailchain';

const provider = new MailchainEmailProvider({
  secretKey: process.env.MAILCHAIN_SECRET_RECOVERY_PHRASE,
  from: process.env.MAILCHAIN_FROM_ADDRESS
});
```
