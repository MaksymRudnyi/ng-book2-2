import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service'

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css'],
    providers: [SpotifyService]
})
export class TrackComponent implements OnInit {

    track: Object;
    id: string;

    constructor(private spotify: SpotifyService) {
        this.id = '1';
    }

    renderTrack(track: any): void {
        this.track = track;
    }

    ngOnInit() {
        this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
    }

}
