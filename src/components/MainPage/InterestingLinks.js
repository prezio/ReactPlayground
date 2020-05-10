import React from 'react';

const links = {
    'Angielskie słówko dnia' : 'https://www.diki.pl/dictionary/word-of-the-day'
};

const InterestingLinks = () => {
    return (
        <>
            <h2>
                Przydatne linki
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(links).map(([key, value]) => {
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td><a href={value}>{value}</a></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default InterestingLinks;