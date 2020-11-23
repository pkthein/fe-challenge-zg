## Summary
The user may pass a list of images, where each image object contains a url and a caption, into the PhotoGallery component. Then the PhotoGallery will display the thumbnails + captions. The user may choose to click on the image for better viewing experience. Once in fullscreen mode, the user may switch images either by clicking on next/prev buttons or swiping left/right.

## Setup
```sh
$ git clone https://github.com/pkthein/fe-challenge-zg.git && cd fe-challenge-zg
$ npm i
$ npm start
```

## Basic Use Case
Once the user has run the program via `npm start`, the user will be brought to the landing page. On the landing page, the user should see the mock images along with the captions associated to the images. If the user wishes to have a better viewing experience, the user may choose to click on the image to enter fullscreen mode. To exit out of fullscreen mode, the user may press the `X` located at the upper right corner. If the user wishes to view the next image from the fullscreen mode, the user may either swipe left or press the `>` button to proceed to the next image. If the user wishes to view the previous image, the user may either swipe right or press the `<` button to proceed to the previous image. Once the user is satisfied with viewing the image(s) from the fullscreen mode, as the user exists out of the fullscreen, the scroll will scroll back (gradually) to the image where the user first accessed the fullscreen mode.

## Notes
* To improve readibility, I have added PropTypes for each component.
* Worked on recovering scroll positon while exiting the fullscreen mode.
* Slide-up animation while entering fullscreen upon clicking on the image.
* Fetching mock image url via `https://placeimg.com/500/300/nature?t=${Math.random()}`
* Mock-data generation is made easier by calling `constructMockData` inside `App.js`
* Supported browsers:
  * Chrome
  * Edge
  * Firefox

## Conclusion
Thank you for the challenge, and I had a great time working on the challenge. 
