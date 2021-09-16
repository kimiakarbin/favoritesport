import React, { useState } from 'react';

function App() {
    const [sportName, setSportName] = useState('');

    const [sportPoint, setSportPoint] = useState('');

    const [search, setSearch] = useState('');

    const [show, setShow] = useState(false);

    const [list, setList] = useState([
        {
            id: 1,

            sportName: 'football',
            sportPoint: 5,
        },
        {
            id: 2,
            sportName: 'vollyball',
            sportPoint: 4,
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
    const deletelist = (sportName) => {
        setList(list.filter((item) => item.sportName !== sportName));
    };

    list.filter((item) => item);

    const deleteAll = (id) => {
        setList(list.filter((item) => item.id === id));
        setSearch('');
        setShow(true);
    };

    const onClear = () => {
        setSportName('');
        setSportPoint('');
        setShow(false);
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

                    <th>edit </th>
                </thead>
            </table>
            {list.map((item) => {
                return (
                    <table>
                        <tbody>
                            <td>{item.sportName}</td>
                            <td> {item.sportPoint}</td>

                            <td>
                                <button
                                    onClick={() => deletelist(item.sportName)}
                                >
                                    delete
                                </button>
                            </td>

                            <td>
                                <button>edit</button>
                            </td>
                        </tbody>
                    </table>
                );
            })}{' '}
            <input
                type="text"
                placeholder="search..."
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            ></input>
            {list
                .filter((val) => {
                    if (search === '') {
                        return val;
                    } else if (
                        val.sportName

                            .toLocaleLowerCase()
                            .includes(search.toLocaleLowerCase())
                    ) {
                        return val;
                    }
                    return 0;
                })
                .map((val) => {
                    return (
                        <p>
                            {val.sportName}
                            &nbsp; &nbsp;
                            {val.sportPoint}
                        </p>
                    );
                })}
            ;
            <div>
                <button onClick={deleteAll}> Delete All </button>
                {show && <p>no data to show!</p>}
            </div>
        </div>
    );
}

export default App;
