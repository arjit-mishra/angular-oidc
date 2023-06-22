import {AuthConfig} from "angular-oauth2-oidc";

// @ts-ignore
export const authConfig: AuthConfig = {
  issuer:'https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_91kEDVrRj',
  // https://cognito-idp.auth.ap-south-1.amazonaws.com/ap-south-1_91kEDVrRj/.well-known/openid-configuration
  // loginUrl: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/oauth2/authorize',
  // tokenEndpoint: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/oauth2/token',
  redirectUri: window.location.origin,
  clientId: '1c7fgf6sesctt50k581lgr8c1v',
  logoutUrl: 'https://tupper-dev.auth.ap-south-1.amazoncognito.com/logout?response_type=code&client_id=1c7fgf6sesctt50k581lgr8c1v&scope=openid%20email%20phone%20profile&redirect_uri=http%3A%2F%2Flocalhost:4200%2Fv1%2Fcallback&code_challenge=springboot&code_challenge_method=S256',
  responseType: 'code',
  scope: 'openid email phone profile',
}



// export const authConfig: AuthConfig = {
//   issuer:'https://arjit-dev.us.auth0.com/',
//   redirectUri: window.location.origin,
//   clientId: 'IFZYraOQXUuM0ZVqxRces73xNQrm6rK2',
//   responseType: 'code',
//   customQueryParams: {
//     audience : 'https://demo-api'
//   },
//   scope: 'openid email profile',
// }
