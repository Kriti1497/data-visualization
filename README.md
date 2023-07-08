
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Inside project

Components: Two tsx file has been created one name renderTable for
showing the Flavonoids Stats and other name renderGammaTable for showing
Gamma Table.

Dataset File: One file has been craeted to accomodate the data selt of wine
data. The file name is dataset.ts

Utility function: One file has been create for handling all the logic for
calculating the mean, median and mode of Flavonoids and Gamma. File
name utility.ts that takes data from the dataset.ts file

In App.tsx, both the component has been called that will generate the below UI 


![Screenshot from 2023-07-08 02-06-22](https://github.com/Kriti1497/data-visualization/assets/91423390/02d2807b-c50b-4a03-9239-c3f1fd75bad0)


The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

