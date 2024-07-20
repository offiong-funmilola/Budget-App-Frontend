import {type Input} from '../../type'

function Input({type, min, name, id, value, isTitle, onChange}: Input) {
  return (
    <input
      type={type}
      min={type === 'number' ? min : ''}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={isTitle ? "w-3/4 px-3 py-3 border border-gray-400 rounded-xl text-xl font-bold" : "w-full py-2 px-5 text-center"}
    />
  )
}

export default Input

