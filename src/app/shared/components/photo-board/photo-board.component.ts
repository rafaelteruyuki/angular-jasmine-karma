import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Photo } from "./interfaces/photo.interface";

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges {
  @Input() public photos: Photo[];
  public rows: Photo[][] = [];
  
  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos) {      
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photo[]): Photo[][] {
    const newRows = [];
    const step = 4;

    if(photos) {
      for(let index = 0; index < photos.length; index += step) {
        newRows.push(photos.slice(index, index + step));
      }
    } 

    return newRows;
  }
}
