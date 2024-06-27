import React from "react";

const categories = [
    'All',
    'Pregnancy',
    'Nutrition',
    'Fetal Development',
    'Screening & Tests',
    'Development & Milestones',
    'Sleep',
    'Ovulation',
];

const articles = [
    {
        title: "19 Best Pregnancy Food",
        image: './images/19pregnancyfood.png'
    },

    {
        title: "When Can You Find Out Your Baby Sex",
        image: './images/findoutbabysex.png'
    },

    {
        title: "How Important Is Exercising",
        image: './images/howimportantisexercising.png'
    },


];


const Articles = () => {
    return (
        <section className="py-8 mx-16 my-8 lg:mx-32">
            <h2 className="text-2xl font-medium mb-4 text-center">Articles/Blogs</h2>
            <div className="flex gap-4 mb-4 overflow-x-scroll lg:justify-center lg:w-[103%]">
                {
                    categories.map((category, index) => (
                        <button key={index}
                            className={`py-1 px-3 mb-4 font-light rounded-full text-button-green-dark ${category === 'All' ? 'bg-button-green-light text-white' : 'bg-button-pink text-button-green-dark'} hover:bg-opacity-80`}
                        >
                            {category}
                        </button>
                    )
                    )
                }
            </div>
            <div className="flex flex-col items-center md:flex-row md:flex-nowrap gap-4">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden">
                        <div className="w-72 h-48 md:w-96">
                            <img src={article.image} alt={article.title} className=" w-full h-full object-cover shadow-md rounded-lg" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-light text-center">{article.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;