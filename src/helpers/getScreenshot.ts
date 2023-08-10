import puppeteer from "puppeteer";

export const getScreenshot = async (href: string) => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
    });

    const page = await browser.newPage();

    await page.goto(href);

    await page.setViewport({
        width: 1920 * 0.60,
        height: 1080 * 0.60,
    });

    try {
        await page.waitForNetworkIdle();
    } catch (error) {

    }

    await page.waitForTimeout(2000);

    const image = await page.screenshot({
        encoding: "base64",
        type: "jpeg",
        quality: 20,

    });

    await browser.close();

    // convert to base64
    return `data:image/png;base64,${image}`;
};
