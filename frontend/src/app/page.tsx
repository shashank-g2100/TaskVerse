// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// type Todo = {
//   id: string;
//   title: string;
//   completed: boolean;
// };

// export default function Home() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState("");

//   const fetchTodos = async () => {
//     const res = await axios.get("http://localhost:8000/todos");
//     setTodos(res.data);
//   };

//   const addTodo = async () => {
//     if (!newTodo.trim()) return;
//     await axios.post("http://localhost:8000/todo", { title: newTodo, completed: false });
//     setNewTodo("");
//     fetchTodos();
//   };

//   const toggleComplete = async (id: string, completed: boolean) => {
//     await axios.put(`http://localhost:8000/todo/${id}`, { title: "Updated", completed: !completed });
//     fetchTodos();
//   };

//   const deleteTodo = async (id: string) => {
//     await axios.delete(`http://localhost:8000/todo/${id}`);
//     fetchTodos();
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   return (
//     <main className="px-100 py-20 mx-auto bg-white min-h-screen">
//       <h1 className="text-3xl  text-gray-900 font-bold mb-4">Advanced To-Do App</h1>
//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           placeholder="Add new task"
//           className="border p-2 flex-1 rounded"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add
//         </button>
//       </div>
//       <ul className="space-y-2">
//         {todos.map((todo) => (
//           <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
//             <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
//             <div className="flex gap-2">
//               <button onClick={() => toggleComplete(todo.id, todo.completed)} className="text-green-600">
//                 ✔️
//               </button>
//               <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
//                 ❌
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }




// "use client"

// import LoginForm from "@/components/auth/login-form"
// import Link from "next/link"


// export default function Home(){
//   function handleLogin(email: string, password: string): Promise<void> {
//     throw new Error("Function not implemented.")
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-slate-800">Task Manager</h1>
//           <p className="text-slate-600 mt-2">Organize your tasks efficiently</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-6">
//         <LoginForm onSubmit={handleLogin} buttonText="Login">
//         <p className="text-sm text-center text-gray-600 mt-4">
//           Don't have an account?{' '}
//           <Link href="/register" className="text-blue-600 hover:underline">
//             Register here
//           </Link>
//         </p>
//       </LoginForm>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'
import LoginForm from '@/components/auth/login-form'
import { login } from '@/services/api'
import { saveToken } from '@/utils/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await login(email, password);
      saveToken(res.data.access_token);
      router.push('/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md rounded-lg shadow-lg p-6">
        
        {/* Heading comes BEFORE the LoginForm */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Task Manager</h1>
          <p className="mt-2">Organize your tasks efficiently</p>
        </div>

        <LoginForm onSubmit={handleLogin} buttonText="Login" />

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
