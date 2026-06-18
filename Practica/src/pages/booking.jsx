import { useState } from "react";

function Booking() {
    const [nume, setName] = useState("");
    const [telefon, setTelefon] = useState("");
    const [animal, setAnimal] = useState("");
    const [data, setData] = useState("");
    const [tipProgramare, setTipProgramare] = useState("");

    async function onSubmit() {
        const res = await fetch('http://localhost:3001/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nume, telefon, animal, data, tipProgramare })
        });
        const d = await res.json();
        if (d.success) alert('Programare creată!');
    }
    return (
        <>
            <section className="min-w-[375px] min-h-[95dvh] h-[95dvh] w-full flex items-center justify-center text-white bg-cover bg-right bg-no-repeat">
                <div className="max-w-[1400px] w-[95%] sm:w-[80%] md:w-[60%] h-full flex items-center justify-center flex-col gap-[15px] lg:gap-[25px]">

                    <h1 className="text-[25px] md:text-[30px] lg:text-[38px] text-black">
                        Programează-te
                    </h1>

                    <div className="w-full px-4">
                        <label className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Nume
                        </label>

                        <input
                            type="text"
                            value={nume}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Introduceți numele..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600"
                        />
                    </div>

                    <div className="w-full px-4">
                        <label className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Nr. Telefon
                        </label>

                        <input
                            type="text"
                            value={telefon}
                            onChange={(e) => setTelefon(e.target.value)}
                            placeholder="Introduceți numărul..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600"
                        />
                    </div>

                    <div className="w-full px-4">
                        <label className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Animal vătămat
                        </label>

                        <input
                            type="text"
                            value={animal}
                            onChange={(e) => setAnimal(e.target.value)}
                            placeholder="Ex: câine, pisică..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600"
                        />
                    </div>

                    <div className="w-full px-4">
                        <label className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Data
                        </label>

                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600"
                        />
                    </div>

                    <div className="w-full px-4">
                        <label className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Tipul programării
                        </label>

                        <select
                            value={tipProgramare}
                            onChange={(e) => setTipProgramare(e.target.value)}
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600">
                            <option value="">Selectează</option>
                            <option value="Preventive">Preventive</option>
                            <option value="Chirurgicale">Chirurgicale</option>
                            <option value="Stomatologice">Stomatologice</option>
                            <option value="Grooming">Grooming</option>
                        </select>
                    </div>

                    <button
                        onClick={onSubmit}
                        type="submit"
                        className={`w-full sm:w-[450px] py-3 border border-white scale-95 hover:scale-105 transition-transform duration-300 ease-in-out rounded-full mt-3 font-medium transition-all duration-300
                            ${nume !== "" &&
                                telefon !== "" &&
                                animal !== "" &&
                                data !== "" &&
                                tipProgramare !== ""
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                            }`}
                    >
                        Creează programare
                    </button>
                </div>
            </section>
        </>
    );
}

export default Booking;