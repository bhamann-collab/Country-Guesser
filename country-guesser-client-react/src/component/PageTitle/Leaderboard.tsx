import React from 'react'

const Leaderboard = (props) => {

    let initData = props.highscoreData;
    console.log(props.highscoreData);

    let listInitData = initData.map((initData, index) => {
        return (
            <tr className="positionResults" key={index}>
                <th>{index+1}</th>
                <th>{initData.name}</th>
                <th>{initData.streak}</th>
            </tr>
        )
    });

    return (
        <div className="Leaderboard">
            <table>
                <tr>
                    <th>Position</th>
                    <th>Nickname</th>
                    <th>Streak</th>
                </tr>
                    {listInitData}
            </table>

        </div>
    )
}

export default Leaderboard
