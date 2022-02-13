import React, { useState } from 'react'


const TicTac = () => {
  const [turn, setTurn] = useState(1);
  const [a11, seta11] = useState('');
  const [a12, seta12] = useState('');
  const [a13, seta13] = useState('');
  const [a21, seta21] = useState('');
  const [a22, seta22] = useState('');
  const [a23, seta23] = useState('');
  const [a31, seta31] = useState('');
  const [a32, seta32] = useState('');
  const [a33, seta33] = useState('');

  const OX = (turn % 2) === 1 ? 'X' : 'O'

  const onChange = (ev) => {
    const { name } = ev.currentTarget;

    switch (name) {
      case '11': { if (a11 == '') { seta11(OX); setTurn(turn + 1); } break; }
      case '12': { if (a12 == '') { seta12(OX); setTurn(turn + 1); } break; }
      case '13': { if (a13 == '') { seta13(OX); setTurn(turn + 1); } break; }
      case '21': { if (a21 == '') { seta21(OX); setTurn(turn + 1); } break; }
      case '22': { if (a22 == '') { seta22(OX); setTurn(turn + 1); } break; }
      case '23': { if (a23 == '') { seta23(OX); setTurn(turn + 1); } break; }
      case '31': { if (a31 == '') { seta31(OX); setTurn(turn + 1); } break; }
      case '32': { if (a32 == '') { seta32(OX); setTurn(turn + 1); } break; }
      case '33': { if (a33 == '') { seta33(OX); setTurn(turn + 1); } break; }
    }

  }

  return (
    <div className="flex flex-col items-center mt-14 text-3xl">
      <h1 className="z-50 text-white">PLAYER {turn % 2} TURN: {OX} </h1>
      <div className=" my-4 grid border-4">
        <div className="colspan flex mx-auto align-center">
          <button onClick={onChange} className="square" name="11" >{a11}</button>
          <button onClick={onChange} className="square" name="12" >{a12}</button>
          <button onClick={onChange} className="square" name="13" >{a13}</button>
        </div>
        <div className="colspan flex mx-auto align-center">
          <button onClick={onChange} className="square" name="21" >{a21}</button>
          <button onClick={onChange} className="square" name="22" >{a22}</button>
          <button onClick={onChange} className="square" name="23" >{a23}</button>
        </div>
        <div className="colspan flex mx-auto align-center">
          <button onClick={onChange} className="square" name="31" >{a31}</button>
          <button onClick={onChange} className="square" name="32" >{a32}</button>
          <button onClick={onChange} className="square" name="33" >{a33}</button>
        </div>
      </div>
    </div>
  )
}

export default TicTac