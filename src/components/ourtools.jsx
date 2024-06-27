import React from "react";

const tools = [
    {
        name: 'A.I Telemedicine',
        image: './images/aiTelemedicine.png',
    },

    {
        name: 'Pregnancy Tracker',
        image: './images/Pregnancytrackericon.png',
    },
    {
        name: 'Baby Growth Tracker',
        image: './images/babygrowthtracker.png',
    },
    {
        name: 'Due Date Calculator',
        image: './images/duedatecalculator.png',
    },
    {
        name: 'Community Groups',
        image: './images/communitygroups.png',
    },

]

const OurTools = () => {
    return (
        <section className="py-16 mx-16 my-8 bg-tools-bg rounded-lg lg:mx-32">
            <h2 className="text-2xl font-medium mb-4 text-center">Our Tools</h2>
            <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
                <div key={index} className=" flex flex-col items-center">
                   <img src={tool.image} alt={tool.name} className="h-28 mb-2" />
                    <p className="text-center text-sm font-light">{tool.name}</p>
                </div>
            ))}
            </div>
            
        </section>
    )

};

export default OurTools;