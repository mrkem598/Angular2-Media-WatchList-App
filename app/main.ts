// bootstrap logic targeting the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// importing class
import { AppModule } from './app.module';
// instance of platform object with a root module called appmodule
platformBrowserDynamic().bootstrapModule(AppModule);
