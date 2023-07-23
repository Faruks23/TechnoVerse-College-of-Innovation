import React from "react";

const ResearchPapersSection = () => {
  // Sample research paper links (replace with actual links from your data)
  const researchPapers = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3po9yh9PfLXpXEsWTxbDfDRq3dnAaegMIbY6zebmUvQ3uNsu59-kRiZmLrtW_YdD_-4&usqp=CAU",
      title: "Machine Learning Techniques in Natural Language Processing",
      link: "https://example.com/research-paper-1",
      author: "John Doe",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qZoLTPtyOMdlHHIt2KXp88F2Nv5vwtySEjYHC5P3r7nX172wtRg_SkNfLxAfyoFQV8A&usqp=CAU",
      title: "Advancements in Quantum Computing",
      link: "https://example.com/research-paper-2",
      author: "Jane Smith",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbpAqeK8_koeuiOf7IKZudL5izW5D-RJC0HQN4K0-YjnSntoUxZ_O2J-CR5vpmFIHrns&usqp=CAU",
      title: "The Impact of Climate Change on Biodiversity",
      link: "https://example.com/research-paper-3",
      author: "Alex Johnson",
    },
  ];

  return (
    <section className=" my-[150px]">
      <h2 className="text-2xl font-bold md:text-5xl mb-4 uppercase text-center">
        Research <span className="text-pink-500">Papers </span>
      </h2>
      <div className="flex  justify-center mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="p-3 c-card lg:w-[400px] lg:h-[390px] w-[300px] h-[100%] bg-slate-200 shadow-2xl border font-serif"
            >
              <img className=" w-full lg:h-[200px]" src={paper.img} alt="" />
              <p className="font-bold my-3">{paper.title}</p>
              <p>
                <span>Author:</span> {paper.author}
              </p>

              <button className="bt shadow-md lg:mt-[40px]"> View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;
