import React from 'react';
import Button from '../ui/Button';

const Navbar = ({ setComponent }) => {
  return (
    <div className="bg-gray-700 h-[7vh] w-[100%] flex justify-around items-center">
        <h3 className="w-[30%] text-white text-xl inline">Navbar</h3>
        <div className="w-[20%] flex justify-between items-center">
            <div onClick={() => setComponent('todos')}>
                <Button>Todos</Button>
            </div>
            <div onClick={() => setComponent('create')}>
                <Button>Create</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar