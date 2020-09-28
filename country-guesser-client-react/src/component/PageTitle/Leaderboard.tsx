import React from 'react'

const Leaderboard = () => {

    let initData = [
        {'id': 1, 'nickname': 'Jack', 'streak': 24},
        {'id': 2, 'nickname': 'John', 'streak': 23},
        {'id': 3, 'nickname': 'James', 'streak': 20},
        {'id': 4, 'nickname': 'Jimbo', 'streak': 18},
        {'id': 5, 'nickname': 'Jimmy', 'streak': 15},
        {'id': 6, 'nickname': 'Jemimah', 'streak': 13},
        {'id': 7, 'nickname': 'Jarrod', 'streak': 12},
        {'id': 8, 'nickname': 'Jumbo', 'streak': 10},
        {'id': 9, 'nickname': 'Jelly', 'streak': 8},
        {'id': 10, 'nickname': 'Jye', 'streak': 4},
    ]

    let listInitData = initData.map((initData) => {
        return (
            <tr className="positionResults">
                <th>{initData.id}</th>
                <th>{initData.nickname}</th>
                <th>{initData.streak}</th>
            </tr>
        )
    });

    console.log(listInitData);

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
