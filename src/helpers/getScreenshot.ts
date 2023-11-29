import puppeteer from "puppeteer";

export const faviconToBase64 = async (href: string) => {
    try {
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            headless: "new",
        });
        
        const page = await browser.newPage();

        await page.goto(href);

        const faviconURL = await page.$eval("link[rel='icon'], link[rel='shortcut icon']", (element: any) => element.href);


        const [response] = await Promise.all([
            page.goto(faviconURL),
            page.waitForResponse(response => response.url().includes('.png') || response.url().includes('.ico')),
        ]);

        const buffer = await response!.buffer();

        await browser.close();

        return `data:image/png;base64,${buffer.toString('base64')}`;

    } catch (error) {
    }

    return "";
}

export const getScreenshot = async (href: string) => {
    const IMAGE_SCALE = 0.60;
    const IMAGE_WIDTH = 1920;
    const IMAGE_HEIGHT = 1080;
    const IMAGE_QUALITY = 20;
    const IMAGE_TYPE = "jpeg";


    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: IMAGE_WIDTH * IMAGE_SCALE,
        height: IMAGE_HEIGHT * IMAGE_SCALE,
    });

    await page.goto(href)

    try {
        await page.waitForNetworkIdle();
    } catch (error) {
    }

    const image = await page.screenshot({
        encoding: "base64",
        type: IMAGE_TYPE,
        quality: IMAGE_QUALITY,
    });

    let description = "NO_DESCRIPTION_FOUND";

    try {
        description = await page.$eval("head > meta[name='description']", element => element.content);
    } catch (error) {
    }

    const title = await page.title();

    await browser.close();

    const favicon = await faviconToBase64(href);

    // convert to base64
    return {
        screenshot: `data:image/png;base64,${image}`,
        description,
        title,
        favicon
    }
};
