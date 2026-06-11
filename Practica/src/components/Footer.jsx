function Footer() {

    return (
        <>
            <footer class="bg-white-900 text-black py-12 border-t min-h-[60dvh] flex items-center justify-center border-gray-300">
                <div class="w-[90%] mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div>
                            <h3 class="text-xl font-semibold mb-4">
                                Numele companiei
                            </h3>

                            <p class="text-gray-400 text-sm">
                                Scurtă descriere a companiei / ce face site-ul
                            </p>
                        </div>

                        <div>
                            <h4 class="font-semibold mb-4">Contact</h4>

                            <ul class="space-y-2 text-gray-400 text-sm">
                                <li>Email: email@exemplu.com</li>
                                <li>Telefon: +373 XX XXX XXX</li>
                                <li>Adresă: Adresa companiei</li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-semibold mb-4">Informații</h4>

                            <ul class="space-y-2 text-gray-400 text-sm">
                                <li>[Scopul / intenția site-ului]</li>
                                <li>[Principalele servicii sau produse]</li>
                                <li>[Publicul țintă]</li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-semibold mb-4">Linkuri utile</h4>

                            <ul class="space-y-2 text-gray-400 text-sm">
                                <li>[Politica de confidențialitate]</li>
                                <li>[Termeni și condiții]</li>
                                <li>[Întrebări frecvente]</li>
                                <li>[Rețele sociale]</li>
                            </ul>
                        </div>

                    </div>

                    <div class="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                        © [Anul] [Numele companiei]. Toate drepturile rezervate.
                    </div>
                </div>
            </footer>
        </>

    );


}

export default Footer;