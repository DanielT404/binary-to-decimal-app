import React from 'react';
import {useState} from 'react';
import './DecimalConverter.css';

function DecimalConverter()
{  
    const [decimalValue, setDecimalValue] = useState(0);
    const [showDecimalValue, setShowDecimalValue] = useState(false);
    const [invalidBinaryError, setInvalidBinaryError] = useState('');


    let convertToDecimal = (e) => 
    {  
        console.log(e.target.value);
        if(e.target.value === '' || e.target.value === null || e.target.value === undefined)
        {
            setShowDecimalValue(false);
        }
        else 
        {
            let digits = e.target.value.split('').map((v) => v = parseInt(v));
            if(digits.every(digit => [0,1].indexOf(digit) > -1))
            {
                let converted = digits.reverse().map((v, i) => {
                    v *= Math.pow(2, i);
                    return v;
                });
                let value = converted.reduce((prev, curr) => prev + curr, 0);
                setInvalidBinaryError('');
                setShowDecimalValue(true);
                setDecimalValue(value);
                return value;
            }
            else {
                setInvalidBinaryError('Invalid binary number. It must contain only 0 or 1\'s.');
                setShowDecimalValue(false);
                setDecimalValue(0);
            }
        }
    }

    return (
        <div className="DecimalConverter">
            {
                invalidBinaryError && 
                <div className="DecimalConverter__error">
                    <span className="DecimalConverter__error--message">{invalidBinaryError}</span>
                </div>
            }
            <div className="DecimalConverter__input-group">
                <label htmlFor="binaryValue" className="DecimalConverter__binaryLabel">Enter binary number:</label>
                <input type="number" name="binaryValue" className="DecimalConverter__binaryInput" placeholder="e.g. 101..." onChange={convertToDecimal}/>
            </div>

            {
                decimalValue >= 0 && showDecimalValue &&
                <div className="DecimalConverter__input-group">
                    <label htmlFor="decimalValue" className="DecimalConverter__decimalLabel">Decimal number converted:</label>
                    <span className="DecimalConverter__decimalValue" name="decimalValue">{decimalValue}</span>
                </div>
            }
        </div>
    );
}

export default DecimalConverter;