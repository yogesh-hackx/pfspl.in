import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

// const ListItems = [
//     { src: '/yazaki-logo.png', current: false, id: 0 },
//     { src: '/varroc.png', current: false, id: 1 },
//     { src: '/Titan-Company-Logo.png', current: false, id: 2 },
//     { src: '/technical_associates.png', current: false, id: 3 },
//     { src: '/special_cables.png', current: false, id: 4 },
//     { src: '/spark_minda.png', current: false, id: 5 },
//     { src: '/spark_minda_vast.png', current: false, id: 6 },
//     { src: '/sansera.png', current: false, id: 7 },
//     { src: '/radiant_appliances.png', current: false, id: 8 },
//     { src: '/bajaj_motors.png', current: false, id: 9 },
// ];
const ListItems = [
    { src: '/premier energies.png', current: false, id: 0 },
    { src: '/horizon_packs.png', current: false, id: 1 },
    { src: '/hindustan_zinc.png', current: false, id: 2 },
    { src: '/endurance.png', current: false, id: 3 },
    { src: '/brakes_india.png', current: false, id: 4 },
    { src: '/tvs.png', current: false, id: 5 },
    { src: '/tata_autocomps.png', current: false, id: 6 },
    { src: '/mahabal_groups.png', current: false, id: 7 },
    { src: '/JBM_Group.png', current: false, id: 8 },
    { src: '/huhtamaki.png', current: false, id: 9 },
    { src: '/bhagwati_products.png', current: false, id: 10 },
];

const Clients = () => {
    const x = useMotionValue(0);
    const logosRef = useRef();
    const [items, setItems] = useState(ListItems);
    const [count, setCount] = useState(0);
    // useInterval(() => {
    //     setCount(count + 1);
    //     // items[count % 4].current = true;
    //     // items[Math.abs(count - 1) % 4].current = false;
    //     let item = ListItems.shift();
    //     ListItems.push(item);
    //     setItems([...ListItems]);
    // }, 35000);

    useEffect(() => {
        const controls = animate(x, -logosRef.current.clientWidth + 500, {
            type: 'tween',
            ease: 'linear',
            duration: 24,
            // stiffness: 2000,
            onComplete: (v) => {},
            repeat: 'Infinity',
            onUpdate: (v) => v,
        });

        // console.log(controls);
        return controls.stop;
        // console.log(x);
    }, []);
    return (
        <>
            <div
                style={{
                    whiteSpace: 'nowrap',
                    overflowX: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                }}
                className=""
            >
                <motion.div
                    // animate={{ x: 100 }}
                    // initial={{x: '100vw'}}
                    style={{ x, whiteSpace: 'nowrap' }}
                    // transition={{ duration: 0.8, repeat: 'infinity' }}
                    ref={logosRef}
                    className=""
                >
                    {items.map((item) => (
                        <div
                            // animate={{ x: [100, 100] }}
                            // style={{ display: 'inline-block' }}
                            key={item.id}
                            className="client-image"
                        >
                            <img
                                src={item.src}
                                alt=""
                                style={{ maxHeight: '120px' }}
                            />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    // animate={{ initial }}
                    // initial={{x:'200vw'}}
                    style={{ x, whiteSpace: 'nowrap', display: 'inline-block' }}
                    // transition={{ duration: 0.8, repeat: 'infinity' }}
                    ref={logosRef}
                    className=""
                >
                    {items.map((item) => (
                        <div
                            // animate={{ x: [100, 100] }}
                            // transition={{ duration: 1, repeat: 'infinity' }}
                            // style={{ display: 'inline-block' }}
                            key={item.id}
                            className="client-image"
                        >
                            <img
                                src={item.src}
                                alt=""
                                style={{ maxHeight: '120px' }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Clients;
