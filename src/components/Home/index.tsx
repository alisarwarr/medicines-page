import { tick, msg } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


export default function Home() {
    return (
        <div className="h-[100vh]">


            <div className="pt-32 flex flex-col items-center">

                <p
                    className="
                      text-white font-semibold tracking-wide
                        text-lg SCREEN350:text-2xl SCREEN500:text-[1.65rem] SCREEN600:text-[1.85rem] SCREEN750:text-4xl SCREEN850:text-5xl SCREEN1000:text-6xl
                        SCREEN1000:tracking-wide
                    "
                >
                    Best Quality Medicines
                </p>

                <img
                    src="https://www.outdoor-order.com/wp-content/uploads/2017/05/curve-logo.png"
                    alt="curve"
                    className="
                        w-28 SCREEN350:w-36 SCREEN500:w-40 SCREEN600:w-44 SCREEN1000:w-60
                        -mt-[1.625rem] SCREEN350:-mt-8 SCREEN500:-mt-[2.125rem] SCREEN600:-mt-9 SCREEN1000:-mt-12
                        ml-1.5
                        rotate-[30deg]
                    "
                />

            </div>


            <div
                className="
                    pb-[2.1rem]
                    -mt-4 SCREEN350:-mt-7 SCREEN500:-mt-8 SCREEN600:-mt-12
                "
            >

                <div
                    className="
                        flex flex-col items-center bg-[#ECECEC] m-[auto] rounded-[1.35rem] pb-7
                        pt-3 SCREEN750:pt-3.5
                        w-[85%] SCREEN750:w-[570px]
                        SCREEN750:h-[318px] SCREEN1000:h-[339px]
                    "
                >
                    <div className="flex items-center ml-3">
                        <p
                            className="
                                font-extrabold
                                text-xl SCREEN350:text-2xl SCREEN500:text-[1.785rem] SCREEN600:text-[1.985rem] SCREEN750:text-4xl SCREEN850:text-[2.5rem] SCREEN1000:text-[2.925rem]
                            "
                        >
                            About Us
                        </p>

                        <div
                            className="
                                w-12 SCREEN350:w-16 SCREEN500:w-20 SCREEN600:w-[5.5rem] SCREEN750:w-[6rem] SCREEN1000:w-[7.25rem]
                                mt-1.5 SCREEN350:-mt-0.5 SCREEN500:-mt-1.5 SCREEN600:-mt-1 SCREEN750:-mt-0.5
                                ml-1
                            "
                        >
                            <Image
                                src={tick}
                                alt="tick"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p
                            className="
                                w-[90%] m-[auto] font-bold text-center
                                SCREEN350:w-[92%] SCREEN750:w-[86%]
                                text-[0.65rem] SCREEN350:text-[0.7rem] SCREEN500:text-[0.765rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                                leading-[0.9rem] SCREEN500:leading-[1.05rem] SCREEN600:leading-[1.145rem] SCREEN750:leading-[1.295rem]
                                SCREEN750:mt-3
                            "
                        >
                            At TezMedz we provide one-stop solution to all the pharmacies with convenience of ordering through our user-friendly plus high-tech application.
                        </p>

                        <p
                            className="
                                w-[90%] m-[auto] font-bold text-center
                                SCREEN350:w-[92%] SCREEN750:w-[86%]
                                text-[0.65rem] SCREEN350:text-[0.7rem] SCREEN500:text-[0.765rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                                leading-[0.9rem] SCREEN500:leading-[1.05rem] SCREEN600:leading-[1.145rem] SCREEN750:leading-[1.295rem]
                                mt-4 SCREEN750:mt-6
                            "
                        >
                            We aim to deliver all the necessary medical supplies within 24 hours of order confirmation which specifically differentiates us from the existing supply chain in B2B pharmaceutical marketplace.
                        </p>
                    </div>
                </div>

            </div>


            <div className="pb-[2.1rem] mt-0.5">

                <div
                    className="
                        flex flex-col items-center bg-[#ECECEC] m-[auto] rounded-[1.35rem]
                        pb-8 SCREEN500:pb-9 SCREEN600:pb-10
                        pt-3 SCREEN750:pt-3.5
                        w-[85%] SCREEN750:w-[570px]
                        SCREEN750:h-[318px] SCREEN1000:h-[332px]
                    "
                >
                    <div className="flex items-center ml-3">
                        <p
                            className="
                                font-extrabold
                                text-xl SCREEN350:text-2xl SCREEN500:text-[1.785rem] SCREEN600:text-[1.985rem] SCREEN750:text-4xl SCREEN850:text-[2.5rem] SCREEN1000:text-[2.925rem]
                            "
                        >
                            Contact Us
                        </p>

                        <div
                            className="
                                w-12 SCREEN350:w-16 SCREEN500:w-20 SCREEN600:w-[5.5rem] SCREEN750:w-[6rem] SCREEN1000:w-[7.25rem]
                                mt-1.5 SCREEN350:-mt-0.5 SCREEN500:-mt-1.5 SCREEN600:-mt-1 SCREEN750:-mt-0.5
                                ml-1
                            "
                        >
                            <Image
                                src={msg}
                                alt="msg"
                            />
                        </div>
                    </div>

                    <div
                        className="
                            relative w-[90%] flex items-center
                            -mt-2 SCREEN750:mt-2
                        "
                    >
                        <span
                            className="
                                font-bold mt-2.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        >
                            Name:
                        </span>

                        <input
                            type="text"
                            className="
                                w-full bg-transparent border-b-2 border-black outline-none ml-6 mt-1.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        />
                    </div>

                    <div
                        className="
                            relative w-[90%] flex items-center
                            -mt-2 SCREEN750:mt-6
                        "
                    >
                        <span
                            className="
                                font-bold mt-2.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        >
                            Contact:
                        </span>

                        <input
                            type="text"
                            className="
                                w-full bg-transparent border-b-2 border-black outline-none ml-3.5 mt-1.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        />
                    </div>

                    <div
                        className="
                            relative w-[90%] flex items-center
                            -mt-2 SCREEN750:mt-6
                        "
                    >
                        <span
                            className="
                                font-bold mt-2.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        >
                            Message:
                        </span>

                        <input
                            type="text"
                            className="
                                w-full bg-transparent border-b-2 border-black outline-none ml-2 mt-1.5
                                text-[0.65rem] SCREEN350:text-[0.725rem] SCREEN500:text-[0.785rem] SCREEN600:text-[0.825rem] SCREEN750:text-[0.975rem]
                            "
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}