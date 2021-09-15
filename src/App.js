import React, { useState } from 'react';

function App() {
    const [sportName, setSportName] = useState('');
    const [sportPoint, setSportPoint] = useState('');
    const [list, setList] = useState([
        {
            id: 1,
            sportName: 'football',
            sportPoint: 5,
        },
    ]);

    const onSubmit = () => {
        if (!sportName || !sportPoint) {
            alert('please fill the blank');
            return;
        }
        setList([...list, { sportName, sportPoint }]);
        setSportName('');
        setSportPoint('');
    };

    list.filter((item) => item);
    const deletelist = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const onClear = () => {
        setSportName('');
        setSportPoint('');
    };

    return (
        <div
            className="App"
            style={{
                border: '3px solid purple',
            }}
        >
            <div>My Favorite sports:</div>
            <div style={{ border: '5px solid blue' }}>
                <div>
                    <label> sportName : </label>

                    <input
                        value={sportName}
                        onChange={(event) => setSportName(event.target.value)}
                        type="text"
                        placeholder="sportName"
                        style={{}}
                    />
                </div>
                <div>
                    <label> sportPoint : </label>

                    <input
                        value={sportPoint}
                        onChange={(event) => setSportPoint(event.target.value)}
                        type="number"
                        placeholder="sportPoint"
                    />
                </div>

                <button onClick={onSubmit}>Add</button>

                <button onClick={onClear}>clear</button>
            </div>
            <table>
                <thead>
                    <th>sportName </th>
                    <th>sportPoint </th>
                    <th>delete </th>
                    <th>edit</th>
                </thead>
            </table>
            {list.map((item) => {
                return (
                    <table>
                        <tbody>
                            <td>{item.sportName}</td>
                            <td> {item.sportPoint}</td>
                            <td>
                                <button onClick={() => deletelist(item.id)}>
                                    delete
                                </button>
                            </td>
                            <td>
                                <button>edit</button>
                            </td>
                        </tbody>
                    </table>
                );
            })}
        </div>
    );
}

export default App;
