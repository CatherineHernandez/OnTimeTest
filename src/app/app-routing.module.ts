import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { BodyComponent } from './Components/RestofApp/body/body.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
    { path: 'LogIn', component: LogInComponent },
    { path: 'Body', component: BodyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}