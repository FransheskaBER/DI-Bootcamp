import { Command } from "commander";

const program = new Command();

program
    .command("greet")
    .description("Print a friendly greeting in colors")
    .option("-n, --personName <string>", "Person name")
    .action(async (options) => {
        const { greetPerson } = await import("./commands/greet.js");
        greetPerson(options.personName);
    });

program
    .command("fetch")
    .description("Prints the current weather and condition of a city")
    .option("-n, --cityName <string>", "city name")
    .action(async (options) =>{
        const { getWeather } = await import("./commands/fetch.js");
        getWeather(options.cityName);
    });

program
    .command("read")
    .description("Read the content of a specific file")
    .option("-n, --filePath <string>", "file name")
    .action(async(options)=>{
        const { fileReading } = await import("./commands/read.js");
        fileReading(options.filePath);    
    });


program.parse();