import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../../image/shared/image.service';
import { ImageFilterPipe } from '../../image/shared/filter.pipe';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ViewChild } from '@angular/core'
import { FileUploadService } from '../../services/file-upload.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-gallery',
    templateUrl: './outfits.component.html',
    styleUrls: ['./outfits.component.css']
})

export class OutfitsComponent implements OnInit {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    title = 'Recent Photos';
    visibleImages?: Observable<any>;

    // Create an input
    @Input() filterBy?: any = 'all';

    ngOnInit(): void {
      this.visibleImages = this.uploadService.getFiles();
    }

    constructor(private observer: BreakpointObserver, 
      private uploadService: FileUploadService) {
    }

    ngAfterViewInit() {
      this.observer
        .observe(['(max-width: 1200px)'])
        .pipe(delay(1))
        .subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
    }
}