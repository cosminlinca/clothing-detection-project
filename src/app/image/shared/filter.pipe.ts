import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform {
    // take certain items and criteria
    transform(items: any[], criteria: string): any {
        if(criteria == 'all') {
            return items;
        } else {
            return items.filter(item => {
                if (item.clothing_type != undefined && item.brand_type != undefined) {
                    return item.clothing_type.includes(criteria) || 
                        item.brand_type.includes(criteria);
                }
            });
        }
    }
}