import puppeteer from "puppeteer";

export const getScreenshot = async (href: string) => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto(href);
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.waitForNetworkIdle();
    const image = await page.screenshot({
        encoding: "binary",
        type: "png",
    });
    await browser.close();

    // convert to base64
    return `data:image/png;base64,${image.toString("base64")}`;
};
