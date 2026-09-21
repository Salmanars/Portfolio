import { portfolioData } from "@/data/portfolioData";

export default function TechStack() {
  const { techStacks } = portfolioData;

  return (
    <section id="techstack" className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-8 bg-purple-600"></div>
        <h2 className="text-2xl font-bold">Technical Stack</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techStacks?.map((tech, index) => (
          <div key={index} className="bg-[#1a1a1a] p-4 rounded-xl flex justify-between items-center">
            <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            <div className="flex items-center gap-4 w-1/2">
              <div className="w-full h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" 
                  style={{ width: `${tech.percentage}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-purple-400 w-8 text-right">{tech.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}