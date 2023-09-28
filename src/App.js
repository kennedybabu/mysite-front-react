import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <div className="container flex flex-row">

          <div className="sidebar min-w-[350px]">
            <div className="flex flex-column w-full">
              <div className="top min-h-[407px] pt-[50px] bg-[#1d3557] relative w-full">
                  <h2 className='text-2xl text-center'>beehive</h2>

                  <div className="absolute py-8 px-4 text-center text-black inset-x-0 shadow-xl -bottom-[20%] h-[250px] aspect-square bg-stone-100 rounded-sm w-[70%] mx-auto">
                      <div className='h-[50px] bg-red-200 mx-auto rounded-full aspect-square'>

                      </div>
                      <h4 className='font-bold'>Rahmi Cooper</h4>
                      <small>Member</small>
                      <hr />
                      <div className='flex flex-row gap-5 mt-3 items-center justify-center'>
                        <div>
                            <p>0</p>
                            <small>Friends</small>
                        </div>

                        <div>
                            <p>2</p>
                            <small>Groups</small>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="bottom">

              </div>
            </div>
          </div>

          <div className="main-content w-full">
              <Header /> 
              <div className='flex flex-row h-screen mt-[80px]'>
                  <div className="basis-3/4 h-full h-full border-r border-gray-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sunt.
                  </div>

                  <div className="basis-1/4">
                    sidebar
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
