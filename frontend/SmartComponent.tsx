import React, { useEffect, useState } from 'react'
import { downloadResultsMap, saveResultsMap } from './utils'

const checkCandidatePrimary = (candidate: number): boolean => {
    for (let i = 2; i <= candidate / 2; i++) {
        if (candidate % i === 0) {
            return false
        }
    }

    return true
}

const SmartComponent: React.FC = () => {
    const [counter, setCounter] = useState(1)
    const [isPrimary, setPrimary] = useState(false)
    const [resultMap, setResultMap] = useState({
        [counter]: checkCandidatePrimary(counter),
    })
    const [inputValue, setInputValue] = useState(0)

    const getResultMapFromServer = async () => {
        const primaryNumbers = await downloadResultsMap()
        const biggestPrimaryNumber = Math.max(...primaryNumbers)
        setResultMap((prevState) => ({
            ...prevState,
            ...primaryNumbers.reduce<Record<number, boolean>>(
                (acc, primaryNumber) => ({ ...acc, [primaryNumber]: true }),
                {}
            ),
        }));
        setCounter(biggestPrimaryNumber)
    }

    useEffect(() => {
        const isCandidatePrimary = checkCandidatePrimary(counter)
        if (isPrimary !== isCandidatePrimary) {
            setPrimary(isCandidatePrimary)
        }
        setResultMap((prevState) => ({
            ...prevState,
            [counter]: isCandidatePrimary,
        }))
    }, [counter])

    return (
        <div>
            <p>
                Counter value is:
                <strong data-testid="counter-value">{counter}</strong>
                <br />
                {isPrimary ? (
                    <strong data-testid="is-number-primary">
                        NUMBER IS PRIMARY!
                    </strong>
                ) : (
                    <br />
                )}
            </p>

            <p>
                <button
                    data-testid="increase-button-1"
                    onClick={() =>
                        setCounter((currentCounter) => currentCounter + 1)
                    }
                >
                    Increase value by 1
                </button>
            </p>
            <p>
                <button
                    data-testid="increase-button-10"
                    onClick={() =>
                        setCounter((currentCounter) => currentCounter + 10)
                    }
                >
                    Increase value by 10
                </button>
            </p>
            <p>
                <input
                    data-tesid="increase-input"
                    value={inputValue}
                    onChange={(event) => setInputValue(+event.target.value)}
                />
            </p>
            <p>
                <button
                    data-testid="increase-button-custom"
                    onClick={() =>
                        setCounter(
                            (currentCounter) => currentCounter + inputValue
                        )
                    }
                >
                    Increase value by {inputValue}
                </button>
            </p>
            <img src="./party-soju.gif" />
            <h2>Currently checked number</h2>
            {Object.entries(resultMap).map(
                ([candidate, isCandidatePrimary]) => (
                    <p key={candidate}>
                        {candidate} :{' '}
                        {isCandidatePrimary ? (
                            <strong style={{ color: 'green' }}>YES</strong>
                        ) : (
                            <strong style={{ color: 'red' }}>NO</strong>
                        )}
                    </p>
                )
            )}
            <p>
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => saveResultsMap(resultMap)}
                >
                    Save results <i className="material-icons">save</i>
                </span>
            </p>
            <p>
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => getResultMapFromServer()}
                >
                    Get results <i className="material-icons">download</i>
                </span>
            </p>
        </div>
    )
}

export default SmartComponent
