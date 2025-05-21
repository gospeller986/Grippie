import { motion } from "framer-motion"
import { opacity, perspective, slide } from "./anim"

export default function Inner({ children }: any) {
    const anim = (variants: any) => {

        return {

            initial: "initial",

            animate: "enter",

            exit: "exit",

            variants

        }

    }
    const variants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
        >

            {

                children

            }

        </motion.div>

        //   <div className='inner'>

        //     <motion.div className='slide' {...anim(slide)}/>

        //     <motion.div className='page' {...anim(perspective)}>

        //         <motion.div {...anim(opacity)}>


        //             {

        //                 children

        //             }

        //         </motion.div>

        //     </motion.div>

        // </div>

    )
}