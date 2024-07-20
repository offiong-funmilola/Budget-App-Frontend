import Input from "./Input"
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever } from "react-icons/md";
import { Row } from "../../type";

function TableRow({listIndex, item, handleChange, handleDelete, isBill}:Row) {
  return (
    <tr
      key={uuidv4()}
      className="w-full h-12 flex justify-between items-center"
    >
      <td className="w-1/4 text-xl font-sans text-black">
        <Input
          type="text"
          name="name"
          id={`name_${listIndex}`}
          value={item.name}
          isTitle= {false}
          onChange={(e) => handleChange(e, listIndex)}
        />
      </td>
      {!isBill && 
        <td className="w-1/4 text-xl font-sans text-black">
          <Input
            type="number"
            min="1"
            name="unit"
            id={`unit_${listIndex}`}
            value={item.unit}
            isTitle= {false}
            onChange={(e) => handleChange(e, listIndex)}
          />
        </td>
      }
      {!isBill && 
        <td className="w-1/4 text-xl font-sans text-black">
          <Input
            type="number"
            min="1"
            name="price"
            id={`unit_${listIndex}`}
            value={item.price}
            isTitle= {false}
            onChange={(e) => handleChange(e, listIndex)}
          />
        </td>
      }
      
      <td className="w-1/4 text-xl font-sans text-black">
        <Input
          type="number"
          min="1"
          name="amount"
          id={`unit_${listIndex}`}
          value={item.amount}
          isTitle= {false}
          onChange={(e) => handleChange(e, listIndex)}
        />  
      </td>
      {isBill && 
        <td className="w-1/3 text-xl font-sans text-black">
          <input
          type="date"
          name="date"
          id={`date_${listIndex}`}
          value={item.date}
          onChange={(e) => handleChange(e, listIndex)}
          className="w-full py-2 px-5 text-center"
          />
        </td>
      }
      <td className="w-10 text-xl flex justify-center">
        <MdDeleteForever
          className="text-2xl text-red-500"
          onClick={(e: any) => handleDelete(e, listIndex)}
        />
      </td>
    </tr>
  )
}

export default TableRow
