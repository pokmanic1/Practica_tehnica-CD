import { useState } from "react";

function Inregistreazate() {
    const [nume, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onChangeName(e) {
        setName(e.target.value);
        
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);

    }   
    function onChangePassword(e) {
        setPassword(e.target.value);

    }
    function onSubmit() {
        console.log(nume); 
        console.log(email);
        console.log(password)
    }



    return (
        <>
            <section className="min-w-[375px] min-h-[95dvh] h-[95dvh] w-full flex items-center justify-center text-white bg-cover bg-right   bg-no-repeat">
                <div className="max-w-[1400px] w-[95%] sm:w-[80%]  md:w-[60%] h-full  flex items-center justify-center flex-col gap-[15px] lg:gap-[25px]">
                    <h1 className="text-[25px] md:text-[30px] lg:text-[38px] text-black">Creaza un cont</h1>
                    <div class="w-full   px-4">
                        <label htmlFor="name" class="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Nume
                        </label>

                        <input
                            type="text"
                            id="name"
                            value={nume}
                            onChange={onChangeName}
                            placeholder="Introduceți numele..."
                            class="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <div class="w-full  px-4">
                        <label htmlFor="email" class="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Email
                        </label>

                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="Introduceți emailul..."
                            class="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <div class="w-full  px-4">
                        <label htmlFor="parola" class="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Parola
                        </label>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Introduceți parola..."
                            class="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <button id="loginBtn" onClick={onSubmit} 
                        class="w-full sm:w-[450px] py-3 bg-gray-200 cursor-pointer text-black border border-white scale-95 hover:scale-105 transition-transform duration-300 ease-in-out rounded-full mt-3 font-medium transition-all duration-300">
                        Creaza un cont
                    </button>
                </div>


            </section>
        </>
    );
}

export default Inregistreazate;  