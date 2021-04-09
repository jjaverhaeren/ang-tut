import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { TwoWayBindngTaskComponent } from './two-way-bindng-task/two-way-bindng-task.component';
import { DirectivesTaskComponent } from './directives-task/directives-task.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccesAlertComponent, TwoWayBindngTaskComponent, DirectivesTaskComponent],
  imports: [BrowserModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
