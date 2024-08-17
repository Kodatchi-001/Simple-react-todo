import { useState } from "react";

export default function Todo_App() {
    const [input_value, setInput_Value] = useState('');
    const [Liste_Tasks, setListe_Tasks] = useState([]);
    const [Edit_index, setEdit_index] = useState(null);


    const HandelName = e => setInput_Value(e.target.value);

    const create_task = () => {
        if (input_value.trim() === '') return;
        if (Edit_index !== null) {
            setListe_Tasks(Liste_Tasks.map((task, index) =>
                index == Edit_index ? input_value : task
            ))
            setEdit_index(null)
        } else {
            setListe_Tasks([...Liste_Tasks, input_value]);
        }
        setInput_Value('');
    };

    const Suprimme = index => setListe_Tasks(Liste_Tasks.filter((_, i) => i !== index));

    const Modifier = index => {
        setEdit_index(index);
        setInput_Value(Liste_Tasks[index]);
    }


    return (
        <section className="w-full h-screen flex justify-center items-center bg-gray-200">
            <div className="w-2/5 h-4/6 flex flex-col justify-between items-center flex-wrap">
                <h1 className="text-6xl">Todo-App</h1>
                <div className="w-full h-4/5 flex flex-wrap">
                    <div className="w-full h-1/5 flex justify-between items-center">
                        <input
                            type="text"
                            className="w-4/5 h-3/6 border-2 border-black text-xl px-2 rounded-lg"
                            placeholder={Edit_index !== null ? "Modifier votre tâche" : "Créer une tâche"}
                            value={input_value}
                            onChange={HandelName}
                        />
                        <button
                            className="px-10 py-2 rounded-lg bg-black text-md text-white"
                            onClick={create_task}
                        >
                            {Edit_index !== null ? "Enregistrer" : "Ajouter"}
                        </button>
                    </div>

                    <div className="w-full h-5/6 flex flex-col gap-2">
                        {
                            Liste_Tasks.length > 0 ? (
                                Liste_Tasks.map((task, index) => (
                                    <div key={index} className="w-full h-[7vh] flex justify-between items-center px-5 rounded-lg text-white bg-black">
                                        <h1 className="text-lg">{task}</h1>
                                        <div className="h-full flex items-center gap-3">
                                            <button
                                                className="px-2 py-1 rounded-lg bg-orange-500 text-black"
                                                onClick={() => Modifier(index)}>
                                                Modifier
                                            </button>
                                            <button
                                                className="px-2 py-1 rounded-lg bg-red-500 text-white"
                                                onClick={() => Suprimme(index)}>
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="w-full h-[7vh] flex justify-center items-center rounded-lg text-black bg-gray-300">
                                    <h1 className="text-xl">Aucune tâche</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
// import { useState } from "react";

// export default function Todo_App() {
//     const [Liste_Tasks, setListe_Tasks] = useState([]);
//     const [input_value, setInput_Value] = useState('');
//     const [editIndex, setEditIndex] = useState(null);

//     const HandelName = e => setInput_Value(e.target.value);

//     const create_task = () => {
//         if (input_value.trim() === '') return;
//         if (editIndex !== null) {
//             const updatedTasks = Liste_Tasks.map((task, index) =>
//                 index == editIndex ? input_value : task
//             );
//             setListe_Tasks(updatedTasks);
//             setEditIndex(null);
//         } else {
//             setListe_Tasks([...Liste_Tasks, input_value]);
//         }
//         setInput_Value('');
//     };

//     const Suprimme = index => {
//         const updatedList = Liste_Tasks.filter((_, i) => i !== index);
//         setListe_Tasks(updatedList);
//     };

//     const Modify = index => {
//         setEditIndex(index);
//         setInput_Value(Liste_Tasks[index]);
//     };

//     return (
//         <section className="w-full h-screen flex justify-center items-center bg-gray-200">
//             <div className="w-2/5 h-4/6 flex flex-col justify-between items-center flex-wrap">
//                 <h1 className="text-6xl">Todo-App</h1>
//                 <div className="w-full h-4/5 flex flex-wrap">
//                     <div className="w-full h-1/5 flex justify-between items-center">
//                         <input
//                             type="text"
//                             className="w-4/5 h-3/6 border-2 border-black text-xl px-2 rounded-lg"
//                             placeholder={editIndex !== null ? "Modifier votre tâche" : "Créer une tâche"}
//                             value={input_value}
//                             onChange={HandelName}
//                         />
//                         <button
//                             className="px-10 py-2 rounded-lg bg-black text-md text-white"
//                             onClick={create_task}
//                         >
//                             {editIndex !== null ? "Enregistrer" : "Ajouter"}
//                         </button>
//                     </div>

//                     <div className="w-full h-5/6 flex flex-col gap-2">
//                         {
//                             Liste_Tasks.length > 0 ? (
//                                 Liste_Tasks.map((task, index) => (
//                                     <div key={index} className="w-full h-[7vh] flex justify-between items-center px-5 rounded-lg text-white bg-black">
//                                         <h1 className="text-lg">{task}</h1>
//                                         <div className="h-full flex items-center gap-3">
//                                             <button
//                                                 className="px-2 py-1 rounded-lg bg-orange-500 text-black"
//                                                 onClick={() => Modify(index)}>
//                                                 Modifier
//                                             </button>
//                                             <button
//                                                 className="px-2 py-1 rounded-lg bg-red-500 text-white"
//                                                 onClick={() => Suprimme(index)}>
//                                                 Supprimer
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div className="w-full h-[7vh] flex justify-center items-center rounded-lg text-black bg-gray-300">
//                                     <h1 className="text-xl">Aucune tâche</h1>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
