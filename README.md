# User Journey Visualizer

This tool visualises multiple user journeys defined in a simple JSON file.

## Build from source files

1. Clone the repo from Github

   ```sh
   git clone git@github.com:grrtbrtr/user-journey-visualizer.git
   cd user-journey-visualizer
   ```

2. Install build dependencies

   ```sh
   npm install
   ```
3. Run or build

   ```sh
   npm run start # runs a local development server
   npm run build # creates a build in the ./build folder
   ```

## Defining user journeys

1. Open the JSON file in the `./src/data` folder.
2. Define the project information, personas and user journey steps.
3. Save the JSON file.

## Todo's

- [ ] Add support for persona avatars
- [ ] Clean up & refactor rendering logic
- [ ] Improve smaller screen support
- [ ] Refactor HTML structure to better support SCSS 7-1 guidelines
- [ ] Refactor JS file names
- [ ] Explain the JSON in readme file

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
