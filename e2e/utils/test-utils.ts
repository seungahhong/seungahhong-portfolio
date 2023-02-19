import { Page, TestInfo } from '@playwright/test';

/**
 * Directory to save videos to.
 */
const baseDir = './playwright/videos';

/**
 * Creates a video file based on the test name and closes the browser context.
 *
 * @param browser Browser used in the test
 */
export async function saveVideo(page: Page, testInfo: TestInfo) {
  const video = page.video();

  if (video) {
    const title = testInfo.title;

    // in case someone forgets to name his test..
    if (title) {
      // replace all occurences of spaces in the test title
      const videoFileName = testInfo.title.replace(/ /g, '-');
      console.log(videoFileName);

      // save new video with test title as name
      video.saveAs(`${baseDir}/${videoFileName}.webm`);

      // delete old video with random ID as name
      video.delete();
    }
  }
}
