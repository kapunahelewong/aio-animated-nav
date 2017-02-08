import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Crashing when I try to load piecemeal
// import { MdToolbarModule } from '@angular/material/toolbar';
// import { MdButtonModule} from '@angular/material/button';
// import { MdIconModule} from '@angular/material/icon';
// import { MdSidenavModule } from '@angular/material/sidenav';
import { Platform } from '@angular/material/core';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { embeddedComponents, EmbeddedComponents } from './embedded';
import { Logger } from './logger.service';
import { navDirectives, navProviders } from './nav-engine';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavItemComponent } from './sidenav/nav-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // Crashing when I try to load piecemeal
    // MdButtonModule.forRoot(),
    // MdIconModule.forRoot(),
    // MdToolbarModule.forRoot(),
    // MdSidenavModule.forRoot()
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    embeddedComponents,
    DocViewerComponent,
    navDirectives,
    NavItemComponent,
    SidenavComponent,
  ],
  providers: [
    EmbeddedComponents,
    Logger,
    navProviders,
    Platform
  ],
  entryComponents: [ embeddedComponents ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
