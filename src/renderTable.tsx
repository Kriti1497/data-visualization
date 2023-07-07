

import React from 'react';
import { FlavanoidsStats } from './utility';
const FlavanoidsStatsTable = () => {
    const stats = FlavanoidsStats();
    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {stats.map((row: any, index: any) => (
                        <th key={row.alcoholClass}>{'Class ' + row.alcoholClass}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Flavanoids Mean</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.mean.toFixed(3)}</td>
                    ))}
                </tr>
                <tr>
                    <td>Flavanoids Median</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.median.toFixed(3)}</td>
                    ))}
                </tr>
                <tr>
                    <td>Flavanoids Mode</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.mode.toFixed(3)}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};


export default FlavanoidsStatsTable