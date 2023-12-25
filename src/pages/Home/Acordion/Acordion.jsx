import { Accordion } from "flowbite-react";
import { Typewriter } from 'react-simple-typewriter'
import { useCountUp } from 'react-countup';
import React from 'react';
const Acordion = () => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 1234567,
        delay: 1000,
        duration: 5,
        onReset: () => console.log('Resetted!'),
        onUpdate: () => console.log('Updated!'),
        onPauseResume: () => console.log('Paused or resumed!'),
        onStart: ({ pauseResume }) => console.log(pauseResume),
        onEnd: ({ pauseResume }) => console.log(pauseResume),
    });
    return (
        <Accordion className="my-10">
            <Accordion.Panel>
                <Accordion.Title>  <Typewriter
                    words={['I am a junior web developer', 'I am a junior web developer', 'I am a junior web developer']}
                    loop={10}
                    autoStart:true
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                />
                    <div>
                        <div>
                            <div ref={countUpRef} />
                            <button onClick={start}>Start</button>
                            <button onClick={reset}>Reset</button>
                            <button onClick={pauseResume}>Pause/Resume</button>
                            <button onClick={() => update(2000)}>Update to 2000</button>
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content>
                    <div className='bg-gray-100 text-pink-600'>
                        <Typewriter
                            words={['MD JAHIDUL ISLAM']}
                            loop={50}
                            cursor
                            autoStart:true
                        />
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                        dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to&nbsp;
                        <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            get started&nbsp;
                        </a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tailwindui.com/"
                                rel="nofollow"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                Tailwind UI
                            </a>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default Acordion;