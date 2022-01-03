import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages: any[] = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

/**
 * Create a JSON object that will hold set of images
 */

const IMAGES = [
    {
        "id": 1, 
        "category": "boats",
        "caption": "View from a boat", 
        "url": "assets/images/rochie.jpg"
    },
    { 
        "id":2,
        "category": "boats", 
        "caption": "Sailing the coast", 
        "url":"assets/images/rochie.jpg"
    },
    {
        "id":3, 
        "category": "boats",
        "caption": "The water was nice",
        "url":"assets/images/trousers.jpg"
    },
    { 
        "id":4, 
        "category": "boats",
        "caption": "Cool water cavern", 
        "url":"assets/images/trousers.jpg"
    },
    { 
         "id":5, 
         "category": "boats",
         "caption": "Sunset at the docks", 
         "url":"assets/images/trousers.jpg"
    },
    {  "id":6, 
        "category": "camping", 
        "caption": "Camping Trip '17'", 
        "url":"assets/img/camping_01.jpeg"
    },
    { 
         "id":7, 
         "category": "camping", 
         "caption": "Kim and Jessie",
         "url":"assets/img/camping_02.jpeg"
    },
    {  
         "id":8, 
         "category": "camping", 
         "caption": "View from the top", 
         "url":"assets/img/camping_03.jpeg"
    },
    {
         "id":9,
          "category": "camping", 
          "caption": "On the trail", 
          "url":"assets/img/camping_04.jpg"
    },
    {
         "id":10, 
         "category": "camping", 
         "caption": "Our camping spot", 
         "url":"assets/img/camping_05.jpeg"
    },
    {
         "id":11, 
         "category": "camping", 
         "caption": "RV Life", 
         "url":"assets/img/camping_06.jpg"
    },
    {
         "id":12, 
         "category": "camping", 
         "caption": "Hiking trip 2017", 
         "url":"assets/img/camping_07.jpeg"
    },
    {  
         "id":13, 
        "category": "library", 
        "caption": "Big library", 
        "url":"assets/img/library_01.jpeg"
    },
    {  
         "id":14,
        "category": "library", 
        "caption": "Stacks", 
        "url":"assets/img/library_02.jpeg"
    },
    { 
         "id":15, 
         "category": "library", 
         "caption": "Saturday afternoon", 
         "url":"assets/img/library_03.jpeg"
    },
    {
         "id":16, 
         "category": "library", 
         "caption": "Local library", 
         "url":"assets/img/library_04.jpeg"
    },
    {
         "id":17, 
         "category": "library", 
         "caption": "Nice library", 
         "url":"assets/img/library_05.jpeg"
    }
 ]