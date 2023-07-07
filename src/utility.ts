import { wineData } from "./dataset";

// Utility function to calculate the mean of an array of numbers
export const calculateMean = (numbers: number[]) => {
    const sum = numbers.reduce((acc: number, num: number) => Number(acc) + Number(num), 0);
    return sum / numbers?.length;
};
// Utility function to calculate the median of an array of numbers
export const calculateMedian = (numbers: number[]) => {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted?.length / 2);
    if (sorted?.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
};
interface frequencyMapObj {
    [key: number]: number
}
// Utility function to calculate the mode of an array of numbers
export const calculateMode = (numbers: number[]) => {
    const frequencyMap: frequencyMapObj = {};
    numbers.forEach((num: number) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
    let mode;
    let maxFrequency = 0;
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            mode = num;
            maxFrequency = frequencyMap[num];
        }
    }
    return Number(mode);
};
interface ClassStats {
    [key: string]: {
        flavanoids: any[];
    };
}
// function to segregate data on the basis of alcohol class for Flavanoids
export const FlavanoidsStats = () => {
    const data = wineData;
    const alcoholClassStats: ClassStats = {};
    data.forEach((entry: any) => {
        const alcoholClass = entry.Alcohol;
        if (!alcoholClassStats[alcoholClass]) {
            alcoholClassStats[alcoholClass] = {
                flavanoids: [],
            };
        }
        alcoholClassStats[alcoholClass].flavanoids.push(entry.Flavanoids);
    });
    const statsTable = [];
    for (const alcoholClass in alcoholClassStats) {
        const flavanoids = alcoholClassStats[alcoholClass].flavanoids;
        const mean = calculateMean(flavanoids);
        const median = calculateMedian(flavanoids);
        const mode = calculateMode(flavanoids);
        statsTable.push({
            alcoholClass,
            mean,
            median,
            mode,
        });
    }
    return statsTable;
};

interface ClassGammaStats {
    [key: string]: {
        gammaValues: any[]
    };
}
// function to segregate data on the basis of alcohol class for Gamma
// firstly the data has been calculated to fetch the gamma value and tehn embedded in the dataset itself
export const GammaStats = () => {
    const pointsWithGamma = wineData.map((gammaValue: any) => {
        const gamma = (gammaValue.Ash * gammaValue.Hue) / gammaValue.Magnesium;
        return { ...gammaValue, Gamma: gamma };
    })
    const gammaStats: ClassGammaStats = {};
    pointsWithGamma.forEach((point) => {
        const alcoholClass = point.Alcohol;
        if (!gammaStats[alcoholClass]) {
            gammaStats[alcoholClass] = {
                gammaValues: [],
            };
        }
        gammaStats[alcoholClass].gammaValues.push(point.Gamma);
    });
    const gammaTable = [];
    for (const alcoholClass in gammaStats) {
        const values = gammaStats[alcoholClass].gammaValues;
        const mean = calculateMean(values);
        const median = calculateMedian(values);
        const mode = calculateMode(values);
        gammaTable.push({
            alcoholClass,
            mean,
            median,
            mode,
        });
    }
    return gammaTable;

}
