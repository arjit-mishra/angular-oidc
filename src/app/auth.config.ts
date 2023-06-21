import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // issuer:'https://tupper-dev.auth.ap-south-1.amazoncognito.com/ap-south-1_91kEDVrRj',
  loginUrl: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/oauth2/authorize',
  tokenEndpoint: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/oauth2/token',
  logoutUrl: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/oauth2/logout',
  redirectUri: window.location.origin,
  clientId: '1c7fgf6sesctt50k581lgr8c1v',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid email phone profile',
}
