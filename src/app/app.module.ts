import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Router} from '@angular/router'

import {AppComponent} from './app.component';
import {AUTH_PROVIDERS} from './auth.service';
import {LoggedInGuard} from './guards/loggedinguard';

import {
    RouterModule,
    Routes
} from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'artists/:id', component: SearchComponent},
    {path: 'albums/:id', component: SearchComponent},
    {path: 'tracks/:id', component: SearchComponent},
    {path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard]}
];



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        TrackComponent,
        LoginComponent,
        ProtectedComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AUTH_PROVIDERS,
        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private router: Router) {}
}
