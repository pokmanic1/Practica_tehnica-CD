import bgImage from '../../img/img-index/img-index-bg-1.svg'
import index_sectiunea_DeCePet from '../../img/img-index/Img-index-sectiunea-DeCePet.svg'
import { AncoraColorata, AncoraSur } from "../utilitati/butoane.jsx";

function Index() {
    let a = '/Practica/img/img-index/img-index-bg-1.svg'
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
                            border border-black rounded-2xl
                            w-full md:w-[90%] xl:w-[60%]
                            min-h-[500px]
                            flex flex-col justify-center items-start
                            px-6 sm:px-10 lg:px-[50px]
                            bg-no-repeat
                            bg-right'
                    style={{
                        backgroundImage: `url(${index_sectiunea_DeCePet})`,

                    }}
                >
                    <div
                        className='
                                w-full md:max-w-[60%] lg:max-w-[45%]
                                flex flex-col items-center md:items-start
                                justify-center
                                bg-white/80 backdrop-blur-sm
                                py-6 px-5 sm:px-8
                                rounded-2xl'
                    >
                        <h1
                            className='
                                    font-poppins
                                    text-[30px] sm:text-[36px] lg:text-[42px]
                                    font-semibold
                                    text-[#1A1A1A]
                                    mb-4
                                    leading-tight
                                    text-center md:text-left'
                        >
                            De ce <span className='text-[#2F80ED]'>„Pet Care”</span>
                        </h1>

                        <p
                            className='
                                    text-black
                                    text-center md:text-left
                                    text-[15px] sm:text-[16px] lg:text-[18px]
                                    leading-7 lg:leading-8
                                    mb-8
                                    font-light'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Oferim grijă, profesionalism și atenție fiecărui animal,
                            pentru ca tu să ai liniștea că este pe cele mai bune mâini.
                        </p>

                        <AncoraColorata
                            title='Vezi Echipa'
                            ancora='/team'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;