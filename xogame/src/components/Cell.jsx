import React from 'react'

function Cell({ id, cell, cells, setCells, firstGo, setFirstGo, winner }) {

    const handleGame = (event) => {
        const square = event.currentTarget;

        if (square.firstChild) {
            let taken = square.firstChild?.classList.contains('circle') || square.firstChild?.classList.contains('cross');

            if (!taken) {
                if (firstGo === 'circle') {
                    square.firstChild?.classList.add('circle');
                    setFirstGo('cross');
                    handleCellChange('circle');
                } else if (firstGo === 'cross') {
                    square.firstChild?.classList.add('cross');
                    setFirstGo('circle');
                    handleCellChange('cross');
                }
            } else {
                console.log('hendluj gresku!')
                alert('Ovo polje si vec odigrao!')
            }
        }



    }

    const handleCellChange = (classList) => {
        let updateArrayCell = cells.map((el, index) => {
            if (index === id) {
                return classList
            } else {
                return el
            }
        })
        setCells(updateArrayCell);
    }

    return (

        <div className='square' id={id} onClick={!winner ? handleGame : null}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell