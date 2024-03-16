import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import axios from 'axios';
// import Dropdown from '../../components/Editor/dropdown';

const extensions = [python({ jsx: true })];

export default function Editor() {
  const [code, setCode] = useState('print("hello world!")');
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    axios.post("http://localhost:3000/editor/python", {code})
    .then(res => setOutput(res.data.result))
    .catch(err => console.log(err))
  }

  return (
    <div className='my-5'>
    <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 md:row-span-2 p-4 rounded-md">
    <div className='h-[70px] bg-black m-4 flex justify-center rounded-xl'>
      {/* <Dropdown/> */}
      <div className='flex p-5 '>
      <button className='bg-green-500 text-white p-2 rounded-md w-[200px] text-xl font-semibold h-[50px] mt-[-12px]'
      onClick={handleSubmit}>Run</button>
    </div>
    </div>

    <CodeMirror
      value={code}
      height="500px"
        theme={abcdef}
      extensions={extensions}
      onChange = {(editor, change) => {
        setCode(editor);
      }}
      style={{ fontSize: "20px", marginLeft:"15px", marginRight:"15px"}}
    />
    </div>

    <div className="md:col-span-1 md:row-span-2 p-4 bg-black mt-4 mr-4 rounded-lg h-[600px]">

    <div className="md:col-span-1 md:row-span-2 p-4 h-[250px] mb-5 rounded-lg bg-white">
      {/* Content for the bottom right row */}
      <h2 className="text-3xl font-bold mb-2">Input</h2>
      <p>This is the content for the bottom right row.</p>
    </div>

    <div className="md:col-span-1 md:row-span-2 p-4 h-[250px] bg-white rounded-lg">
      {/* Content for the bottom right row */}
      <h2 className="text-3xl font-bold mb-2">Output</h2>
      <p className='text-xl'>{`${output}`}</p>
    </div>

    </div>
    
  </div>
</div>
</div>
  );
}