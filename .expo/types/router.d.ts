/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/accountsetup`; params?: Router.UnknownInputParams; } | { pathname: `/create-account`; params?: Router.UnknownInputParams; } | { pathname: `/email-verification`; params?: Router.UnknownInputParams; } | { pathname: `/forgotPassword`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login-page`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/accountsetup`; params?: Router.UnknownOutputParams; } | { pathname: `/create-account`; params?: Router.UnknownOutputParams; } | { pathname: `/email-verification`; params?: Router.UnknownOutputParams; } | { pathname: `/forgotPassword`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/login-page`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/accountsetup${`?${string}` | `#${string}` | ''}` | `/create-account${`?${string}` | `#${string}` | ''}` | `/email-verification${`?${string}` | `#${string}` | ''}` | `/forgotPassword${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/login-page${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/accountsetup`; params?: Router.UnknownInputParams; } | { pathname: `/create-account`; params?: Router.UnknownInputParams; } | { pathname: `/email-verification`; params?: Router.UnknownInputParams; } | { pathname: `/forgotPassword`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login-page`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
