import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
// Going to use the OnChanges interface/ lifecycle hook to track the value of the rating given by the container component.
export class StarComponent implements OnChanges {
  // add the @input decorator here for the rating value
  @Input() rating: number = 0;
  cropWidth: number = 75;
  // use the output decorator on an event to pass data from the child to parent component, just after the colon is the type for the event and type of the data that it will pass, in this case it is a string.
  // create new instance of the event emitter
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // to assign the cropwidth of the stars html according to the calculated rating.
  // only responds to changes to input on the page so must maneouver to make it respond according to the rating in the data - will pass data from parent component to child component using the input property and information back to the parent using an output event.
  ngOnChanges(): void {
    this.cropWidth = this.rating * 74 / 6;
  }

  // method for the behaviour of the stars after they are clicked
  onStarClick(): void {
    this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
  }

}
