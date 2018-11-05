import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fullname' })
export class FullNamePipe implements PipeTransform {
    transform(value: { name: { first: string, last: string } }): string {
        console.log('fullname');
        if (!value) {
            return '';
        }
        if (typeof value !== 'object') {
            throw new Error('Invalid pipe argument for FullNamePipe');
        }
        return `${value.name.first} ${value.name.last}`;
    }
}
