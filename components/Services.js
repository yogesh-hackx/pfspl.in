import { useState } from 'react';
import { useInterval } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';

const ListItems = [
    { text: 'Canteen Services', img: '/canteen.jpg', current: true, id: 0 },
    { text: 'Corporate Food', img: '/Corporate.jpg', current: false, id: 1 },
    { text: 'Outdoor Catering', img: '/Outdoor.jpg', current: false, id: 2 },
];

const Services = () => {
    const [items, setItems] = useState(ListItems);
    const [count, setCount] = useState(1);
    const [hover, setHover] = useState(false);
    useInterval(() => {
        setCount(count + 1);
        items[count % 3].current = true;
        items[Math.abs(count - 1) % 3].current = false;
        // Math.abs(count - 1) % 3 === 0 && count % 3 === 0
        //     ? null
        //     : (items[Math.abs(count - 1) % 3].current = false);
        // let item = ListItems.shift()
        // ListItems.push(item)
        setItems([...ListItems]);
        // if (!hover) {
        // } else {
        //     items[count % 3].current = false;
        //     // let item = ListItems.shift()
        //     // ListItems.push(item)
        //     setItems([...ListItems]);
        // }
    }, 2600);
    return (
        <>
            <div className="services-container">
                <div className="services-img-container">
                    <AnimatePresence>
                        {items.map(
                            (item) =>
                                item.current && (
                                    <motion.img
                                        src={item.img}
                                        key={item.id}
                                        alt=""
                                        initial={{ opacity: 0, rotate: 7 }}
                                        animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                        exit={{
                                            // x: -50,
                                            // scale: 0.95,
                                            opacity: 0,
                                            rotate: -7,
                                        }}
                                        // initial={{ opacity: 0, x: 0 }}
                                        // animate={{ opacity: 1, x: 0 }}
                                        // exit={{ opacity: 0, x: 0, animationDuration: 2 }}
                                        transition={{
                                            duration: 0.6,
                                            // ease: 'linear',
                                        }}
                                        className="services-img"
                                    />
                                ),
                        )}
                    </AnimatePresence>
                </div>

                <div className="services-text-container">
                    {items.map((item, index) => (
                        <motion.li
                            key={item.id}
                            animate={{
                                color: item.current ? '#5BBC59' : '#5E6063',
                                // x: item.current ? -20 : 0,
                                opacity: item.current ? 0.8 : 1,
                                fontSize: item.current ? '1.1em' : '1em',
                                fontWeight: item.current ? 900 : 100,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                                // type: 'spring',
                            }}
                            // onHoverStart={() => {
                            //     items[index].current = true;
                            //     setHover(true);
                            //     setItems([...items]);
                            // }}
                            // onHoverEnd={() => {
                            //     items[index].current = false;
                            //     setHover(false);
                            //     setItems([...items]);
                            // }}
                            className={`services-text ${!item.current && 'mobile-hidden'}`}
                        >
                            {item.text}
                        </motion.li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
