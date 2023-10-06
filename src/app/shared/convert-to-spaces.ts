import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ConvertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  // explains the process of how the pipe should modify the data it will be used on- so this pipe will replace the dashes with spaces.
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
