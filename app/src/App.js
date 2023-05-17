import GroupedSteps from './components/GroupedSteps';
import NavItem from './components/NavItem';
import content from './data/content.json';

function App() {
  return (
    <div>
      <header>
        <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-2 px-2 mt-0 h-auto fixed w-full z-20 top-0">

          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink justify-center md:justify-start text-white text-2xl">
              Demon's Souls Platinum Guide
            </div>
          </div>

        </nav>
      </header>

      <main>
        <div className="flex flex-col md:flex-row">

          <nav aria-label="alternative nav">
            <div
              className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

              <div style={{ 'overflow': 'scroll' }}
                className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul
                  className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                  {content.groups.map(function (group) {
                    return (
                      <NavItem key={group.name} name={group.name} />
                    )
                  })}
                </ul>
              </div>
            </div>
          </nav>

          <section>
            <div id="main" className="main-content flex-1 bg-gray-100 md:mt-2 pb-24 md:pb-5">
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 pt-8 sm:pt-4 p-4 shadow text-2xl text-white">
                  <p className="text-base font-bold pl-2">Credits to u/kojitsuke for writing the guide, u/LarryTheLobster318 for making the first version of the website and u/dombol for updating the layout</p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full p-6">
                  {content.groups.map(function (group) {
                    return (
                      <GroupedSteps key={group.name} name={group.name} steps={group.steps} />
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
