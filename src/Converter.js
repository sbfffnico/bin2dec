import React,{useState, useEffect} from 'react';

function Converter() {
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");

  useEffect( () => {
    convertBinaryToDecimal(binaryValue);
  }, [binaryValue]);

  const binaryRegexPattern = new RegExp('^[0-1]+$');

  const getBinary = (event) => {
    const value = event.target.value;
    setBinaryValue(value);
  }

  const testBinary = () => {
    if (binaryRegexPattern.test(binaryValue)) {
      console.log("Passes");
      return true;
    }
    else {
      console.log("Fails");
      return false;
    }
  }

  const convertBinaryToDecimal = (value) => {
    if (testBinary() && binaryValue !== "") {
      setDecimalValue(parseInt(value,2));
    }
    else {
      setDecimalValue("Waiting for a valid binary number...");
    }
  }

  return (
    <main>
      <div>
        <div>
          Binary: <input id="binary" type="text" onChange={(event) => {
            getBinary(event);
        }}/>
        </div>
        <p>{decimalValue}</p>
      </div>    
    </main>
  )
}

export default Converter;
