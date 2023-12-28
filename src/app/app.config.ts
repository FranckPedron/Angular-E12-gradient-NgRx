import {ApplicationConfig, isDevMode} from "@angular/core";
import {provideStore} from "@ngrx/store";
import {gradientsReducers} from "./store/gradients";
import {provideStoreDevtools} from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({gradients: gradientsReducers}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75
    })
  ]
}
