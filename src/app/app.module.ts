import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {
    RouterModule,
    Routes
} from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'artists/:id', component: SearchComponent},
    {path: 'albums/:id', component: SearchComponent},
    {path: 'tracks/:id', component: SearchComponent}
];



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        TrackComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
