import bgImage from '../../img/img-index/img-index-bg-1.svg'
import { ButonColorat, ButonSur } from "../utilitati/butoane.jsx";

function Index() {
    let a = '/Practica/img/img-index/img-index-bg-1.svg'
    return (
        <>
            <section
                className="min-h-dvh h-dvh w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}>

                <div className='h-full w-full flex justify-center items-center sm:w-[50%] sm:mr-auto border border-black '>
                    <div className='border border-red-400 w-[80%] text-center flex items-center justify-center flex-col gap-8 '>
                        <h1 className='text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-black '>TITLE</h1>
                        <p className='text-[16px] text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique corporis distinctio eaque doloribus tempora libero excepturi enim veritatis est in provident hic aspernatur, dolores esse dolorem amet rem, expedita neque cumque ut culpa! Quis voluptas, laboriosam doloribus reprehenderit dolores necessitatibus similique ut, consequuntur vel optio nisi, consequatur ea obcaecati! </p>

                        <div className=' flex w-full justify-center items-center gap-3'>

                            <ButonColorat title='Progameazate la o consultatie' />
                            <ButonColorat />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Index;