

import React from 'react';
import { GammaStats } from './utility';
const GammaStatsTable = () => {
    const stats = GammaStats();
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
                    <td>Gamma Mean</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.mean.toFixed(3)}</td>
                    ))}
                </tr>
                <tr>
                    <td>Gamma Median</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.median.toFixed(3)}</td>
                    ))}
                </tr>
                <tr>
                    <td>Gamma Mode</td>
                    {stats.map((row: any, index: any) => (
                        <td key={row.alcoholClass}>{row.mode.toFixed(3)}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};


export default GammaStatsTable