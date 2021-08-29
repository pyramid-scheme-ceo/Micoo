import { newBuild, buildStats, latestBuildStats } from "micooc";

async function testNewBuild() {
    // host for containerized service.
    // const host = "http://localhost:8123/engine";

     // host for engine service lunched from local source code.
    const host = "http://localhost:3002";

    const apiKey = "AKed8bcb0f3ca75e98a3";
    const pid = "PID2139551567d24f228180d9170348eeb9";
    const buildVersion = "5fafc0478af24af2da45fa19ddd06c17dd5d0d45";
    const screenshotDirectory = "../latest";

    console.log(await newBuild(host, apiKey, pid, buildVersion, screenshotDirectory));
}

async function testBuildStats() {
   // const host = "http://localhost:8123";
    const host = "http://localhost:3001";
    const bid = "BIDdb67dcb3231548cbae5574dd40c2e28e";
    const apiKey = "AKed8bcb0f3ca75e98a3";

    console.log(await buildStats(host, apiKey, bid));
}

async function testLatestBuildStats() {
   // const host = "http://localhost:8123";
    const host = "http://localhost:3001";
    const pid = "PID2139551567d24f228180d9170348eeb9";
    const apiKey = "AKed8bcb0f3ca75e98a3";

    console.log(await latestBuildStats(host, apiKey, pid));
}

function test() {
    (async () => {
        await testNewBuild();
        await testBuildStats();
        await testLatestBuildStats();
    })();
}

test();
