import React from 'react';
import './Cards.css';

function Cards()
{
    return (
        <div className="Cards">
        <div className="Binary__Card">
          <h2 className="Binary__Card--headline">What is a binary number?</h2>
          <p className="Binary__Card--content">In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system, 
          which uses only two symbols: typically "0" (zero) and "1" (one).
          The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit. Because of its straightforward implementation in 
          digital electronic circuitry using logic gates, the binary system is used by almost all modern computers and computer-based devices.</p>
        </div>
        <div className="Decimal__Card">
          <h2 className="Decimal__Card--headline">What is a decimal number?</h2>
          <p className="Decimal__Card--content">The decimal numeral system (also called base-ten positional numeral system, and occasionally called denary or decanary) 
          is the standard system for denoting integer and non-integer numbers. It is the extension to non-integer numbers of the Hindu–Arabic numeral system. 
          The way of denoting numbers in the decimal system is often referred to as decimal notation.</p>
        </div>
      </div>
    );
}

export default Cards;