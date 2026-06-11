import bgImage from '../../img/img-index/img-index-bg-1.svg'
import index_sectiunea_ServiciiPrincipal from '../../img/img-index/Img_sectiunea_servicii_principale.svg'
import index_sectiunea_DeCePet from '../../img/img-index/Img-index-sectiunea-DeCePet.svg'
import { AncoraColorata, AncoraSur } from "../utilitati/butoane.jsx";

function Index() {
    let a = '/Practica/img/img-index/img-index-bg-1.svg'
const items = [
    {
        id: 1,
        img: '',
        nume: 'Popescu',
        prenume: 'Ana',
        recenzie: 'Personal foarte amabil și profesionist. Cățelul meu a fost tratat cu multă grijă și atenție.',
    },
    {
        id: 2,
        img: '',
        nume: 'Ionescu',
        prenume: 'Mihai',
        recenzie: 'Servicii excelente și explicații clare. Recomand cu încredere această clinică veterinară.',
    },
    {
        id: 3,
        img: '',
        nume: 'Rusu',
        prenume: 'Elena',
        recenzie: 'Am fost impresionată de răbdarea și dedicarea echipei. Pisica mea s-a simțit în siguranță.',
    },
    {
        id: 4,
        img: '',
        nume: 'Munteanu',
        prenume: 'Andrei',
        recenzie: 'Programarea a fost rapidă, iar consultația foarte detaliată. O experiență plăcută.',
    },
    {
        id: 5,
        img: '',
        nume: 'Ceban',
        prenume: 'Maria',
        recenzie: 'Oameni extraordinari! Au avut grijă de cățelul nostru ca și cum ar fi fost al lor.',
    },
    {
        id: 6,
        img: '',
        nume: 'Dumitru',
        prenume: 'Cristian',
        recenzie: 'Profesionalism, curățenie și multă empatie. Cu siguranță vom reveni.',
    },
    {
        id: 7,
        img: '',
        nume: 'Balan',
        prenume: 'Irina',
        recenzie: 'Medicii au răspuns la toate întrebările mele și mi-au oferit sfaturi utile.',
    },
    {
        id: 8,
        img: '',
        nume: 'Luca',
        prenume: 'Victor',
        recenzie: 'Foarte mulțumit de serviciile primite. Atmosferă plăcută și personal dedicat.',
    },
    {
        id: 9,
        img: '',
        nume: 'Sandu',
        prenume: 'Gabriela',
        recenzie: 'Pisica mea a primit îngrijirea de care avea nevoie. Mulțumim întregii echipe!',
    },
    {
        id: 10,
        img: '',
        nume: 'Rotaru',
        prenume: 'Daniel',
        recenzie: 'Consultația a fost punctuală și foarte bine explicată. Recomand cu drag.',
    },
    {
        id: 11,
        img: '',
        nume: 'Mocanu',
        prenume: 'Alina',
        recenzie: 'Un loc unde animalele sunt tratate cu respect și afecțiune. Suntem foarte mulțumiți.',
    },
    {
        id: 12,
        img: '',
        nume: 'Nistor',
        prenume: 'George',
        recenzie: 'Servicii de calitate și personal prietenos. Cea mai bună alegere pentru animăluțul nostru.',
    },
];
    return (
        <>
            <section
                className="min-w-[375px] min-h-[95dvh] h-[95dvh] w-full flex items-center justify-center text-white bg-cover bg-right   bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}>

                <div className='h-full w-full flex justify-center items-center md:w-[50%] md:mr-auto border  border-black '>
                    <div className='border border-red-400 w-[60%] md:w-[100%] text-center flex items-center justify-center flex-col gap-8 '>
                        <h1 className='text-[30px] md:text-[36px] md:bg-transparent bg-gray-100 md:text-[40px] lg:text-[48px] px-[10px] text-black '>TITLE</h1>
                        <p className='text-[16px] text-black md:bg-transparent bg-gray-100 px-[10px]'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique corporis distinctio eaque doloribus tempora libero excepturi enim veritatis est in provident hic aspernatur,</span><span className='md:flex hidden'> dolores esse dolorem amet rem, expedita neque cumque ut culpa! Quis voluptas, laboriosam doloribus reprehenderit dolores necessitatibus similique ut, consequuntur vel optio nisi, consequatur ea obcaecati!</span></p>

                        <div className=' flex w-full justify-center items-center gap-3'>

                            <div className='md:flex hidden'><AncoraColorata title='Progameazate la o consultatie' ancora='/booking' /></div>
                            <div className=' flex md:hidden'><AncoraColorata title='Programeazata' ancora='' /></div>
                            <div><AncoraSur title='aaaaaaaaaaa' ancora='' /></div>

                        </div>
                    </div>
                </div>

            </section>
            <section className='w-full min-h-dvh bg-white flex justify-center items-center px-4 py-10'>
                <div
                    className='
                            border border-black rounded-2xl w-full md:w-[90%] xl:w-[80%] max-w-[1500px] min-h-[500px] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-[50px] bg-cover bg-no-repeat bg-right'
                    style={{
                        backgroundImage: `url(${index_sectiunea_DeCePet})`,

                    }}>
                    <div
                        className='
                                w-full md:max-w-[60%] lg:max-w-[45%] flex flex-col items-center md:items-start justify-center bg-white/80 backdrop-blur-sm py-6 px-5 sm:px-8 rounded-2xl'>
                        <h1
                            className='
                                    font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-[#1A1A1A] mb-4 leading-tight text-center md:text-left'>
                            De ce <span className='text-[#2F80ED]'>„Pet Care”</span>
                        </h1>

                        <p
                            className='
                                    text-blacktext-center md:text-lefttext-[15px] sm:text-[16px] lg:text-[18px]leading-7 lg:leading-8mb-8font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Oferim grijă, profesionalism și atenție fiecărui animal,
                            pentru ca tu să ai liniștea că este pe cele mai bune mâini.
                        </p>

                        <AncoraColorata
                            title='Vezi Echipa'
                            ancora='/team' />
                    </div>
                </div>
            </section>


            <section className='w-full min-h-[95dvh]  bg-white flex justify-center items-center px-4 py-10 bg-cover bg-no-repeat bg-center'
                style={{ backgroundImage: `url("${index_sectiunea_ServiciiPrincipal}")` }}>
                <div className='w-[90%] md:w-[95%] lg:w-[80%]'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px]'>
                        <div className='min-w-[100px] max-w-[400px] h-[200px] sm:h-[260px] md:h-[300px] bg-white border border-black rounded-[20px] flex flex-col justify-center items-center '></div>
                        <div className='min-w-[100px] max-w-[400px] h-[200px] sm:h-[260px] md:h-[300px] bg-white border border-black rounded-[20px] flex flex-col justify-center items-center '></div>
                        <div className='min-w-[100px] max-w-[400px] h-[200px] sm:h-[260px] md:h-[300px] bg-white border border-black rounded-[20px] flex flex-col justify-center items-center '></div>
                        <div className='min-w-[100px] max-w-[400px] h-[200px] sm:h-[260px] md:h-[300px] bg-white border border-black rounded-[20px] flex flex-col justify-center items-center '></div>
                    </div>
                </div>
            </section>


            <style>
                {`
                    @keyframes scroll {
                        from {
                            transform: translateX(0);
                        }
                        to {
                            transform: translateX(calc(-50% - 8px));
                        }
                    }

                    .animate-scroll {
                        width: max-content;
                        animation: scroll 15s linear infinite;
                    }

                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <section className='w-full min-h-[40dvh]  bg-white flex justify-center items-center px-4 py-10 bg-cover bg-no-repeat bg-center'>

                <div className="overflow-hidden  my-auto w-[98%] sm:w-[90%] lg:w-[80%] xl:w-[70%] border-4 border-red-500">
                    <div className="flex items-center gap-4 animate-scroll">
                        {[...items, ...items].map((item, index) => (
                            <div
                                key={index}

                                className="flex-shrink-0 w-[240px]    sm:w-[280px]    md:w-[320px]    lg:w-[340px]    h-[260px]    sm:h-[300px]    md:h-[340px]    bg-blue-600    text-white    rounded-3xl    shadow-xl">
                                <div className="w-full h-full flex flex-col items-center justify-center py-6 px-5">
                                    
                                    <div className="w-[300px] h-[150px] rounded-[20px] overflow-hidden border-2 border-white mb-4 bg-white">
                                        {item.img ? (
                                            <img
                                                src={item.img}
                                                alt={`${item.nume} ${item.prenume}`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-blue-600 text-sm">
                                                IMG
                                            </div>
                                        )}
                                    </div>

                                    {/* Nume */}
                                    <h3 className="text-xl font-bold text-center">
                                        {item.nume || "Nume"}
                                    </h3>

                                    <p className="text-sm opacity-80 mb-4">
                                        {item.prenume || "Prenume"}
                                    </p>

                                    {/* Recenzie */}
                                    <p className="text-sm text-center leading-6 font-normal">
                                        {item.recenzie }
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

        </>
    );
}

export default Index;