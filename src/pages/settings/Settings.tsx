import FileUpload from "./FileUpload";


const Settings = () => {
  function handleFileSelected(): void {
    throw new Error("Function not implemented.");
  }

  return (
        <div className="font-roboto">
    
          {/* Main Content */}
          <div className="container mx-auto my-8 p-6 rounded-lg">
            {/* Profile section */}
            <div className="flex items-center gap-2 pb-10 rounded-full h-119.89px w-115.36px tablet:h-182px tablet:w-174.16px">
              <img
                src="..\src\assets\img-settings\profile-human.svg"
                alt="Profile"
                className="rounded-full"  
              
              />
              <div>
                <h1 className="text-4xl font-medium tablet:text-5xl">John Doe</h1>
                <p className="text-gray-500 text-xl tablet:text-2xl">john.doe@example.com</p>
              </div>
            </div>
            <div>
              <div className="border-b-2 border-gray-300 pb-4 ">
                <h1 className="text-3xl font-medium">Project Profile</h1>
                <p className="text-neutral-500 text-sm tablet:text-base ">Update your profile information in the sections below</p>
              </div>
            </div>
    
            {/* Basic info section */}
            <div className="border-b-2 border-gray-300 pt-2 desktop:grid desktop:grid-cols-2 ldesktopg:gap-4">
              <div className="bg-blue tablet:w-401px">
                <h2 className="text-xl font-medium">Basic Information</h2> 
                <p className="text-sm mb-6 text-neutral-500 text-left leading-9">Update your name and e-mail in this section. Note: this information will be public to all your project colleagues and can be changed anytime</p>
              </div> 
                <form className="tablet:grid tablet:grid-cols-2  gap-4  desktop:py-6">
                    <div className="tablet:col-span-1 mb-4"> 
                        <label className="block text-sm font-semibold mb-2">First Name</label> 
                        <input type="text" id="first-name" placeholder="New first name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input> 
                    </div>
                    <div className="tablet:col-span-1 mb-4">
                        <label className="block text-sm font-semibold mb-2">Last name</label>
                        <input type="text" id="last-name" placeholder="New last name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input> 
                    </div> 
                    <div className="tablet:col-span-2 mb-4"> 
                      <label className="block text-sm font-semibold mb-2">E-mail</label> 
                      <input type="email" id="email" placeholder="New e-mail" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                    </div> 
                </form> 
            </div>
            {/* Profile Picture Section */}
            <div className="bg-white pt-3 rounded-lg tablet:h-417px desktop:grid desktop:grid-cols-2 desktop:gap-4 desktop:h-300.5px"> 
              <div className="tablet:w-401px tablet:h-109px pb-4">
                <h2 className="text-xl font-medium">Profile picture</h2>
                <p className="text-sm text-gray-500 leading-9">Update your profile picture. Supported files are JPG, PNG, WebP and JPEG</p>
              </div>  
                <div className="tablet:flex tablet:gap-5 tablet:justify-start tablet:items-center tablet:pt-4">
                <div className="flex items-center mb-4"> 
                    <div className="w-174.16px h-181px rounded-full bg-white overflow-hidden">
                        <img src="..\src\assets\img-settings\profile-human.svg" alt="picture img" className="w-full h-full"></img> 
                    </div> 
                </div> 
                <form> 
                    <div className="mb-4"> 
                        <label className="block text-sm font-semibold">Add new profile picture</label>
                    </div> 
                    <div> 
                      <FileUpload onFileSelected={handleFileSelected}maxSize={5 * 1024 * 1024 * 1024} acceptedFileTypes={['image/jpeg', 'image/png', 'image/webp','image/jpg']}/>
                    </div> 
                </form> 
                </div>
            </div>
    
            {/* Communication Preferences Section */}
            <div className="border-t-2 border-b-2 border-gray-300 pt-4 desktop:grid desktop:grid-cols-2 desktop:gap-4">
              <div>
              <h4 className="text-xl font-semibold mb-2">Communication</h4>
              <p className="text-sm text-gray-500 font-medium leading-8 tablet:w-401px">Update your e-mail communication preferences anytime.<br />Choose to receive project notifications or disable them completely.</p>
              </div>
              <div className="flex-cols text-sm gap-4">
              <div className="flex flex-col gap-2 pt-4 ">
                  <div className="flex items-center">
                    <input type="checkbox" id="NewTasks" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">New tasks</label>
                  </div>
                  <p>Receive an e-mail alert each time a new task is assigned to me in a project.</p>
                  <br />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="New team members" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">New team members</label>
                  </div>
                  <p>Receive an e-mail alert each time a team members enters in a project I'm assigned to.</p>
                  <br />
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="WeeklyReports" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">Weekly reports</label>
                  </div>
                  <p>Receive a weekly e-mail with a basic report including estimated time and most active members.</p>
                </div>
              </div>
            </div>

            {/* Social Information section */}
            <div className=" pt-6 desktop:grid desktop:grid-cols-2 desktop:gap-4 desktop:pt-4">
              <div>
              <h4 className="text-xl font-medium mb-2">Social Information</h4>
              <p className="text-neutral-500 text-sm pb-4">Update your e-mail communication preferences anytime. <br />
              Choose to receive project notifications or disable them completely.</p>
              </div>
              <div className="mb-4 tablet:w-375px">
              <label className="block text-xs mb-2">Twitter/x</label>
              <div className="flex items-center gap-2 mb-2">
                <input type="text" id="twitter/x" placeholder="x.com/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="twitter-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              <label className="block text-xs mb-2">Instagram</label>
              <div className="flex items-center gap-2 mb-2">
                <input type="text" id="instagram" placeholder="instagram.com/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="instagram-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              <label className="block text-xs mb-2">Linkedin</label>
              <div className="flex items-center gap-2 mb-12">
                <input type="text" id="linkedin" placeholder="linkedin/in/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="linkedin-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex">
              <button className=" text-15px font-semibold mx-auto bg-slate-800 text-white px-24 py-3 rounded-lg tablet:w-410px  hover:bg-slate-600">
                Update information
              </button>
            </div>
            <div className="flex justify-center pt-4">
            <p>Never mind, take me <a href="#" className="text-indigo-600 underline">back to my project</a></p>
            </div>
          </div>
        </div>
    );
};

export default Settings;