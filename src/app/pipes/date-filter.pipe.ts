import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFilter',
    pure: false
})
export class DateFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }

        return items.filter((item) => {
            const date = item.consultation.consultationDate;
            const dateString = new Date(date).toLocaleDateString();
            return dateString === filter;
        });
    }
}